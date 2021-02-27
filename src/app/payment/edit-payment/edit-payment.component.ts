import { ChangeDetectorRef } from '@angular/core';
/*
note: 
1. nhóm isOption = 1: là luôn luôn bị tính phí --> khách không thể lựa chọn --> không hiển thị trong list chọn mà chỉ hiển thị tổng phí trong cột chi phí
nhóm isOption = 2: là khách thích chọn cũng được mà không thích chọn cũng ko sao. là tùy ý.
nhóm isOption = 3: là phải chọn 1 trong những lựa chọn này. Trong nhóm isOption = 3 sẽ được chia nhóm theo group_option và groupType nếu có 2 giá trị trên giống nhau thì là cùng một nhóm
*/
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import {Router, ActivatedRoute} from '@angular/router';

// Services
import { PaymentService } from "./../../services/payment.service";
import { MessageService } from "primeng/api";
import { UserService } from "./../../services/user.service";
import { CouponServices } from "app/services/coupon.service";
import { DialogService } from "primeng/api";
import { ConfirmationService } from 'primeng/api';

// Models
import { ClientProfile } from "app/model/client-profile.model";
import { User } from "./../../model/user.model";
import {
  PaymentRequestModel,
  PaymentServiceModel,
  ServiceGroupPaymentRequestModel,
} from "./../../model/payment-request.model";

// RXJS
import { forkJoin, Subscription } from "rxjs";

// Components
import { ListCouponComponent } from "./../list-coupon/list-coupon.component";
import * as _ from "lodash";

@Component({
  selector: "app-edit-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.scss"],
  providers: [UserService, DialogService], // resolve close multi dialog
})
export class EditPaymentComponent implements OnInit {
  showServicePacks = false;
  requestListForm: FormGroup;
  paymentTypeList = [];
  currentUser = new User();
  private subscription: Subscription;
  timeoutInputChange: any;
  account: ClientProfile;
  currentCoupon;
  currentRequestIdEdited = "";
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private paymentService: PaymentService,
    private messageService: MessageService,
    private userService: UserService,
    private dialogService: DialogService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.account = JSON.parse(localStorage.getItem("userData")); //this.account.userId
    this.currentRequestIdEdited = this.route.snapshot.paramMap.get('id')
    this.getInitFormData( this.currentRequestIdEdited );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  totalPaymentRequest = {
    totalPay: 0,
    totalFee: 0,
    totalAmount: 0,
  };

  private createPaymentRequest(): FormGroup {
    return this.fb.group({
      checked: new FormControl(true),
      description: new FormControl(""),
      serviceGroupId: new FormControl(this.paymentTypeList[0].value, [
        Validators.required,
      ]),
      amountRequest: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      exchangeRate: new FormControl(0, []),
      totalAmount: new FormControl(0, []),
      totalFee: new FormControl(0, []),
      lsServiceSelectedOptionType1: new FormControl([]),
      lsServiceSelectedOptionType2: new FormControl([]),
      lsServiceSelectedOptionType3: new FormControl([], [Validators.required]),
      // for display option
      couponCode: new FormControl(null),
      lsAllService: new FormControl([]),
      edited: new FormControl(false),
    });
  }

  get paymentRequestFormArray(): FormArray {
    return this.requestListForm.get("lsPaymentRequest") as FormArray;
  }

  addPaymentRequest(): void {
    if(this.paymentRequestFormArray.controls.length == 0){
      this.paymentRequestFormArray.push(this.createPaymentRequest());
    } else if(this.requestListForm.valid){
      this.paymentRequestFormArray.push(this.createPaymentRequest());
    }
  }

  removePaymentRequest(rowIndex: number): void {
    this.paymentRequestFormArray.removeAt(rowIndex);
  }

  isPaymentControlHasError(control: any, validationType: string): boolean {
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  savePaymentRequestToDb() {
    this.spinner.show();
    this.paymentService.addPaymentRequest({
      lsPaymentRequest : this.paymentRequestFormArray.value
    }).subscribe( 
      resAddPaymentRequest => {
      if(resAddPaymentRequest && resAddPaymentRequest.result && resAddPaymentRequest.result.success  ){
        if(resAddPaymentRequest){
          this.showMessage("success", "Success", "Thêm yêu cầu thành công");
          setTimeout( () => {
            this.router.navigateByUrl('/payment');
          }, 500)
        } else {
          this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        }
        this.spinner.hide();
      }
    }, err=> {
      this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
      this.spinner.hide();
    })
  }

  removePaymentRequestToDb() {}

  getInitFormData(requestId) {
    const lstRequest = [
      this.paymentService.getLsServiceGroupPaymentRequest(),
      this.paymentService.getPaymentRequestStatus()
    ] ;
    if(requestId){
      lstRequest.push( this.paymentService.getPaymentRequestById(requestId))
    }
    this.spinner.show();
    this.subscription = forkJoin(lstRequest).subscribe(
      (res) => {
        if (res && res.length) {
          if (res[0] && res[0].result && res[0].result.success) {
            this.paymentTypeList = res[0].result.data.map(
              (item: ServiceGroupPaymentRequestModel) => ({
                label: item.groupName,
                value: item.serviceGroupId,
              })
            );
          }
          if (res[1] && res[1].result && res[1].result.success) {
            this.currentUser = res[1].result.data;
          }


          if (requestId && res[2] && res[2].result && res[2].result.success) {
            // form edit
            this.requestListForm = this.fb.group({
              lsPaymentRequest: this.fb.array(
                [this.createPaymentRequest()],
                Validators.required
              ),
            });
            this.paymentRequestFormArray.patchValue([res[2].result.data])
          } else{
            // https://www.c-sharpcorner.com/article/creating-table-with-reactive-forms-in-angular-9-using-primeng-table2/
            this.requestListForm = this.fb.group({
              lsPaymentRequest: this.fb.array(
                [this.createPaymentRequest()],
                Validators.required
              ),
            });
          }
        }
        this.spinner.hide();
      },
      (error) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        this.spinner.hide();
      }
    );
  }

  showMessage(type, message, summary) {
    this.messageService.clear();
    this.messageService.add({
      key: "toast-message",
      severity: type,
      summary: summary,
      detail: message,
    });
  }

  calPaymentRequest(event, rowIndex, changeGroupPaymentRequest?: boolean) {
    this.subscription.unsubscribe();clearTimeout(this.timeoutInputChange);
    let currentPaymentRequestControl = this.paymentRequestFormArray.at( rowIndex );
    // nếu đổi loại yêu cầu => đổi các control đi kèm = Dịch vụ bắt buộc ( đổi validate ) + Dịch vụ không bắt buộc
    if(changeGroupPaymentRequest == true){
      currentPaymentRequestControl.get("lsServiceSelectedOptionType3").setValidators([Validators.minLength(0), Validators.required]);
      currentPaymentRequestControl.patchValue({
        edited: false,
        exchangeRate: 0,
        totalAmount: 0,
        totalFee: 0,
        lsAllService: [],
        lsServiceSelectedOptionType1: [],
        lsServiceSelectedOptionType2: [],
        lsServiceSelectedOptionType3: [],
      });
      this.cd.detectChanges();
    }

    if (
      currentPaymentRequestControl.value.serviceGroupId &&
      currentPaymentRequestControl.value.amountRequest &&
      currentPaymentRequestControl.get("amountRequest").valid && 
      (
         !currentPaymentRequestControl.value.edited ||
        (
          currentPaymentRequestControl.value.edited == true &&
          currentPaymentRequestControl.get("lsServiceSelectedOptionType3").valid
        ) 
      )
    ) {
      // form hợp lệ => gọi hàm tính toán phí => thay đổi validate cho lsServiceSelectedOptionType3 => số dịch vụ cần chọn = số nhóm ( mỗi nhóm chỉ được chọn 1)
      this.timeoutInputChange = setTimeout(() => {
        this.requestListForm.disable();
        this.spinner.show();
        // các dịch vụ đã chọn => isChecked == true
        let lsRequestService = [];
        // tạo mảng lsRequestService từ lsServiceSelectedOptionType1,2,3 => và check các lựa chọn isChecked
        lsRequestService = currentPaymentRequestControl.value.lsAllService.map(
          (service) => {
            if (currentPaymentRequestControl.value.edited == false && service.isDefault == "1" ) {
              // lần đầu load => isDefault => isChecked
              service.isChecked = true;
            } else if (
              currentPaymentRequestControl.value.edited == true &&
              (
                currentPaymentRequestControl.value.lsServiceSelectedOptionType1
                  .map((s) => s.serviceId)
                  .includes(service.serviceId) ||
                currentPaymentRequestControl.value.lsServiceSelectedOptionType2
                  .map((s) => s.serviceId)
                  .includes(service.serviceId) ||
                currentPaymentRequestControl.value.lsServiceSelectedOptionType3
                  .map((s) => s.serviceId)
                  .includes(service.serviceId))
            ) {
              service.isChecked = true;
            } else {
              service.isChecked = false;
            }
            return service;
          }
        );
        const params: PaymentRequestModel = {
          serviceGroupId: currentPaymentRequestControl.value.serviceGroupId,
          couponCode: currentPaymentRequestControl.value.couponCode,
          lsService: lsRequestService,
          amountRequest: currentPaymentRequestControl.value.amountRequest,
        };
        this.subscription = this.paymentService
          .calPaymentRequest(params)
          .subscribe(
            (resServiceOfPaymentType) => {
              let lsServiceSelectedOptionType1 = [];
              let lsServiceSelectedOptionType2 = [];
              let lsServiceSelectedOptionType3 = [];
              let lsAllService = [];

              // tính toán lsAllService: Lưu trữ danh sách service => cập nhật vào từng danh sách nhỏ  lsServiceSelectedOptionType1, lsServiceSelectedOptionType2, lsServiceSelectedOptionType3
              if (currentPaymentRequestControl.value.edited == true) {
                lsAllService = resServiceOfPaymentType.result.data.lsService;
                // Đã edit => lấy theo isChecked
                lsServiceSelectedOptionType1 = lsAllService.filter( (service) => service.isOption == "1");
                lsServiceSelectedOptionType2 = lsAllService.filter((service) => service.isChecked == true && service.isOption == "2" );
                lsServiceSelectedOptionType3 = lsAllService.filter( (service) => service.isChecked == true && service.isOption == "3" );
              } else {
                lsAllService = resServiceOfPaymentType.result.data.lsService.map(
                  (service) => {
                    if (service.isDefault == "1") {
                      service.isChecked = true;
                    }
                    return service;
                  }
                );
                // Chưa edit => lấy theo isDefault
                lsServiceSelectedOptionType1 = lsAllService.filter(  (service) => service.isOption == "1" );
                lsServiceSelectedOptionType2 = lsAllService.filter( (service) =>
                    (service.isDefault == "1") == true && service.isOption == "2"
                );
                lsServiceSelectedOptionType3 = lsAllService.filter( (service) =>
                    (service.isDefault == "1") == true && service.isOption == "3"
                );
              }
              if (
                resServiceOfPaymentType &&
                resServiceOfPaymentType.result &&
                resServiceOfPaymentType.result.data
              ) {
                currentPaymentRequestControl.patchValue({
                  edited: true,
                  serviceGroupId: resServiceOfPaymentType.result.data.serviceGroupId,
                  exchangeRate: resServiceOfPaymentType.result.data.exchangeRate,
                  totalAmount: resServiceOfPaymentType.result.data.totalAmount,
                  totalFee: resServiceOfPaymentType.result.data.totalFee,
                  lsAllService: lsAllService,
                  lsServiceSelectedOptionType1: lsServiceSelectedOptionType1,
                  lsServiceSelectedOptionType2: lsServiceSelectedOptionType2,
                  lsServiceSelectedOptionType3: lsServiceSelectedOptionType3,
                });
              }
              const lstAllService = currentPaymentRequestControl.value.lsAllService;
              // validate minLength cho service bắt buộc ( chọn mỗi phần tử trong mỗi nhóm => số phần tử tối thiểu = số nhóm)
              let uniqueRequestService3Id = _.uniqBy(
                lstAllService.filter( s => s.isOption == '3' ),
                (service: PaymentServiceModel) =>
                  [service.groupType, service.groupOption].join()
              );
              currentPaymentRequestControl.get("lsServiceSelectedOptionType3").setValidators([Validators.minLength(uniqueRequestService3Id.length), Validators.required]);
              this.calTotalPaymentRequest();
              this.spinner.hide();
            },
            (err) => {
              this.spinner.hide();
            }
          );
          this.requestListForm.enable();
      }, 500);
    } else{
      // chưa edit form => Load lần đầu
      let lsServiceSelectedIdOptionType1 = currentPaymentRequestControl.value.lsServiceSelectedOptionType1.map( (s:PaymentServiceModel) => s.serviceId);
      let lsServiceSelectedIdOptionType2 = currentPaymentRequestControl.value.lsServiceSelectedOptionType1.map( (s:PaymentServiceModel) => s.serviceId);
      let lsServiceSelectedIdOptionType3 = currentPaymentRequestControl.value.lsServiceSelectedOptionType1.map( (s:PaymentServiceModel) => s.serviceId);
      let lsAllService = currentPaymentRequestControl.value.lsAllService.map( (service:PaymentServiceModel) => {
        if(
          lsServiceSelectedIdOptionType1.includes(service.serviceId) ||
          lsServiceSelectedIdOptionType2.includes(service.serviceId) ||
          lsServiceSelectedIdOptionType3.includes(service.serviceId)
        ) {
          service.isChecked = true
        } else {
          service.isChecked = false;
        }
        return service;
      });
      currentPaymentRequestControl.patchValue({
        lsAllService: lsAllService,
      });
    }
  }

  calTotalPaymentRequest() {
    this.totalPaymentRequest = {
      totalPay: 0,
      totalFee: 0,
      totalAmount: 0,
    };
    this.paymentRequestFormArray.value.map((paymentRequest) => {
      this.totalPaymentRequest.totalFee += paymentRequest.totalFee;
      this.totalPaymentRequest.totalAmount += paymentRequest.totalAmount;
    });
    this.totalPaymentRequest.totalPay +=
      this.totalPaymentRequest.totalAmount - this.totalPaymentRequest.totalFee;
  }

  paymentValAtIndex(index, field) {
    let currentPaymentRequestControl = this.paymentRequestFormArray.at(index);
    return currentPaymentRequestControl.value[field];
  }

  makeDataForDropdownService(rowIndex, field, isOption: string) {
    if (isOption == "3") {
      // option = 3 => chia theo các nhóm, mỗi nhóm chỉ được chọn 1
      // tạo group và xắp xếp theo thứ tự => bind ra html
      const lstAllService = _.sortBy(this.paymentValAtIndex(rowIndex, field), [
        "groupType",
        "groupOption",
      ]).filter((service) => service.isOption == isOption);
      let uniqueRequestService3Id = _.uniqBy(
        lstAllService,
        (service: PaymentServiceModel) =>
          [service.groupType, service.groupOption].join()
      );
      lstAllService.forEach((service, index) => {
        uniqueRequestService3Id.forEach((uniqueService, uniqueServiceIndex) => {
          if (
            uniqueService.groupType == service.groupType &&
            uniqueService.groupOption == service.groupOption
          ) {
            service["group"] = uniqueServiceIndex;
            service["numOfGroup"] = uniqueRequestService3Id.length;
          }
        });
      });
      return lstAllService;
    } else {
      return this.paymentValAtIndex(rowIndex, field)
        .filter((service) => service.isOption == isOption)
        .map((service) => ({
          label: service.serviceName,
          value: service,
        }));
    }
  }

  checkBoxServiceOptionType3Disabled(paymentRequestIndex, currentService) {
    let disabled = true;
    let currentPaymentRequestControl = this.paymentRequestFormArray.at(
      paymentRequestIndex
    );
    let lsServiceSelected =
      currentPaymentRequestControl.value.lsServiceSelectedOptionType3;
    let lsServiceSelectedId = lsServiceSelected.map((s) => s.serviceId);
    let lsServiceSelectedGroup = lsServiceSelected.map((s) => s.group);
    if (
      lsServiceSelectedId.includes(currentService.serviceId) ||
      lsServiceSelectedId.length == 0
    ) {
      disabled = false;
    } else if (lsServiceSelectedGroup.includes(currentService.group) == false) {
      disabled = false;
    }
    return disabled;
  }

  selectCoupon() {
    if (this.paymentRequestFormArray.valid) {
      const ref = this.dialogService.open(ListCouponComponent, {
        header: "Mã khuyến mại của bạn",
        style: {
          "max-width": "500px",
          "min-width": "300px",
          "overflow-y": "auto",
        },
      });
      ref.onClose.subscribe((couponSelected) => {
        if (couponSelected) {
          this.currentCoupon = couponSelected;
          this.subscription = this.paymentService
            .addCouponPaymentRequest({
              coupon: couponSelected.couponCode,
              lsPaymentRequest: this.paymentRequestFormArray.value.map(
                (paymentRequest) => {
                  let newPaymentRequest: any = {};
                  newPaymentRequest.exchangeRate = paymentRequest.exchangeRate;
                  newPaymentRequest.couponCode = couponSelected.couponCode;
                  newPaymentRequest.totalAmount = paymentRequest.totalAmount;
                  newPaymentRequest.totalFee = paymentRequest.totalFee;
                  newPaymentRequest.serviceGroupId =
                    paymentRequest.serviceGroupId;
                  newPaymentRequest.amountRequest =
                    paymentRequest.amountRequest;
                  newPaymentRequest.description = paymentRequest.description;
                  let lsRequestService = paymentRequest.lsAllService.map(
                    (service) => {
                      if (
                        paymentRequest.lsServiceSelectedOptionType1
                          .map((s) => s.serviceId)
                          .includes(service.serviceId) ||
                        paymentRequest.lsServiceSelectedOptionType2
                          .map((s) => s.serviceId)
                          .includes(service.serviceId) ||
                        paymentRequest.lsServiceSelectedOptionType3
                          .map((s) => s.serviceId)
                          .includes(service.serviceId)
                      ) {
                        service.isChecked = true;
                      }
                      return service;
                    }
                  );
                  newPaymentRequest.lsService = lsRequestService;
                  return newPaymentRequest;
                }
              ),
            })
            .subscribe(
              (resAddCouponToPaymentRequests) => {
                if (
                  resAddCouponToPaymentRequests &&
                  resAddCouponToPaymentRequests.result &&
                  resAddCouponToPaymentRequests.result.success
                ) {
                  let lstPaymentRequestAddedCoupon = resAddCouponToPaymentRequests.result.data.lsPaymentRequest;
                  this.paymentRequestFormArray.controls.forEach(
                    (requestControl, index) => {
                      requestControl.patchValue({
                        couponCode: couponSelected.couponCode,
                        edited: true,
                        serviceGroupId: lstPaymentRequestAddedCoupon[index].serviceGroupId,
                        exchangeRate: lstPaymentRequestAddedCoupon[index].exchangeRate,
                        totalAmount: lstPaymentRequestAddedCoupon[index].totalAmount,
                        totalFee: lstPaymentRequestAddedCoupon[index].totalFee
                      });
                    }
                  );
                }
              },
              (error) => {
                this.showMessage(
                  "error",
                  "Có lỗi xảy ra khi áp dụng coupon. Hãy thử lại!",
                  "Error"
                );
              }
            );
        }
      });
    } else {
      this.showMessage(
        "error",
        "Bạn cần điền đầy đủ thông tin strong danh sách yêu cầu",
        "Error"
      );
    }
  }

  addServicePackage(){
    this.showServicePacks  = true;
  }

  finishAddServicePackage(){
    this.showServicePacks  = false;
  }

  removePaymentRequests(){
    this.confirmationService.confirm({
      message: 'Bạn muốn xóa các request đã chọn?',
      accept: () => {
        this.paymentRequestFormArray.value.forEach( (request, index) => {
          if(request.checked == true){
            this.paymentRequestFormArray.removeAt(index);
          }
        })
      }
  });
  }
}
