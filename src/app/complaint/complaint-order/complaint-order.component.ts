// angular
import { Router, ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';

// models
import { ConfirmDialogModel } from '../../model/confirm-dialog.model';
import { ShipOrders } from '../../model/ship-orders.model';
import { ComplainStatusModel, ComplainModel, ComplainTypeModel } from '../../model/complain.model';

// components
import { ConfirmDialogComponent } from 'app/common-view/confirm-dialog/confirm-dialog.component';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

// services
import { PassDataService } from 'app/services/pass-data.services';
import { ComplaintServices } from 'app/services/complaint.services';
import { SystemService } from 'app/services/system.services';
import { OrderService } from 'app/services/order.service';
import { ConfirmationService } from 'primeng/api';
import { MessagesUtilsService } from '../../services/messages-utils.service';

// other libs
import { MessageService } from 'primeng/components/common/api';
import { Message } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-complaint-order',
  templateUrl: './complaint-order.component.html',
  styleUrls: ['./complaint-order.component.scss']
})
export class ComplaintOrderComponent implements OnInit {

  msgs = [];
  orderComplaintForm: FormGroup;
  currentOrder: ShipOrders = new ShipOrders();
  currentComplain: any = {
    complainCode: ''
  };

  itemsOfCurrentOrder: any = [];
  itemsOfCurrentOrderOptions: any = [];

  complainStatus: ComplainStatusModel[] = [];
  complainStatusOptions = []; // for dropdown PrimeNg

  complainTypes: ComplainTypeModel[] = [];
  complainTypesOptions = []; // for dropdown PrimeNg

  updateSuccess = false;
  complaintList: any = [];

  orderDetailPage = undefined; // form read only
  loadDataSuccess = undefined;

  constructor(
    public messagesUtilsService: MessagesUtilsService,
    private confirmationService: ConfirmationService,
    public messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private _passData: PassDataService,
    private location: Location,
    private complaintServices: ComplaintServices,
    private systemService: SystemService,
    private orderService: OrderService,
    ) {
  }

  ngOnInit() {
    this._passData.loading(true);
    window.scroll(0, 0);
    this.orderComplaintForm = this.formBuilder.group({
      complainType: new FormControl('', [Validators.required]),
      complainStatus: new FormControl('', [Validators.required]),
      complainContent: new FormControl(''),
      complainSettle: new FormControl(''),
      orderSelected: new FormControl('', [Validators.required]),
    });

    this.activeRoute.params.subscribe(params => {
      this.currentComplain.complainId = params.complainId;
      let detailComplaint;
      if (this.currentComplain.complainId) {
        this.complaintServices.getCompainById(this.currentComplain.complainId).subscribe(resCompaint => {
          // mapping value for form detail
          detailComplaint = resCompaint;
          detailComplaint.complainType = resCompaint.complainType;
          detailComplaint.complainStatus = resCompaint.status;
          detailComplaint.complainContent = resCompaint.complainContent;
          detailComplaint.complainSettle = resCompaint.complainSettle;
          detailComplaint.orderSelected = resCompaint.orderDetailId;


          this.currentOrder.orderId = resCompaint.orderId;
          this.currentOrder.orderCode = resCompaint.orderCode;
          this.orderDetailPage = true;
          this.getAllFormData(this.currentOrder.orderId, detailComplaint);
        })
      } else {
        this.currentOrder.orderId = params.orderId;
        this.currentOrder.orderCode = params.orderCode;
        this.orderDetailPage = false;

        this.getAllFormData(this.currentOrder.orderId, detailComplaint);
      }

    })
  }

  getAllFormData(orderId, detailComplaint?) {
    this._passData.loading(true);
    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      this.systemService.getComplainTypes(),
      this.systemService.getComplainStatus(),
      this.orderService.getOrderDetailById(orderId),
      this.complaintServices.getCompainByOrderId(this.currentOrder.orderId)
    ).subscribe(res => {
      if (res) {
        if (res[0] && res[0].length > 0) {
          this.complainTypes = res[0];
          this.complainTypesOptions = res[0].map((type: ComplainTypeModel) => ({ label: type.displayValue, value: type.value }))
        }
        if (res[1] && res[1].length > 0) {
          this.complainStatus = res[1];
          this.complainStatusOptions = res[1].map((status: ComplainStatusModel) => ({ label: status.displayValue, value: status.value }))
        }
        if (res[2] && res[2].length > 0) {
          this.itemsOfCurrentOrder = res[2];
          this.itemsOfCurrentOrderOptions = res[2].map((item: any) => ({ label: item, value: item.orderDetailId }));
          console.log(this.itemsOfCurrentOrder);
          console.log(this.itemsOfCurrentOrderOptions);
        }
        if (res[3] && res[3].length > 0) {
          this.complaintList = res[3];
        }
        if (detailComplaint) {
          this.orderComplaintForm.patchValue(detailComplaint);
        } else {
          this.orderComplaintForm.patchValue({
            complainStatus: this.complainStatusOptions[0].value,
          });
        }
      }
      this._passData.loading(false);
      this.loadDataSuccess = true;
    }, error => {
      this._passData.loading(false);
      this.loadDataSuccess = false;
    });
  }

  clear() {
    this.msgs = [];
  }

  showMessage(str: string, type: string) {
    var _self = this;
    _self.msgs = [];
    _self.msgs.push({ severity: type, summary: str, detail: '' });
    setTimeout(function () {
      _self.clear();
    }, 10000);
  }

  submitComplaintForm() {
    const orderSelected = _.find(this.itemsOfCurrentOrder, { orderDetailId: this.orderComplaintForm.value.orderSelected })
    if (this.validateForm() === true) {
      const complaintParam: ComplainModel = {
        OrderId: this.currentOrder.orderId,
        OrderCode: this.currentOrder.orderCode,
        OrderDetailId: orderSelected.orderDetailId,
        ItemCode: orderSelected.itemCode,
        ComplainType: this.orderComplaintForm.value.complainType,
        ComplainContent: this.orderComplaintForm.value.complainContent,
        ComplainSettle: this.orderComplaintForm.value.complainSettle,
        Status: this.orderComplaintForm.value.complainStatus
      }
      this._passData.loading(true);
      this.complaintServices.sendComplaint(complaintParam).subscribe(
        resAddCoplaint => {
          if (resAddCoplaint.result && resAddCoplaint.result.success === true) {
            this._passData.loading(false);
            this.showToast('success', 'Thành công', 'Tạo khiếu nại thành công');
            setTimeout(() => {
              this.router.navigateByUrl('/complaint/list-complaint')
            }, 1000)
          } else {
            if (resAddCoplaint.result.message) {
              this.showMessage('Có lỗi xảy ra : ' + resAddCoplaint.result.message, 'error');
            } else {
              this.showMessage('Có lỗi xảy ra, hãy thử lại!', 'error');
            }
            this._passData.loading(false);
          }
        },
        errAddCoplaint => {
          this.showMessage('Có lỗi xảy ra, hãy thử lại!', 'error');
          this._passData.loading(true);
        }
      )
    }

  }

  validateForm() {
    let valid = true;
    if (!this.orderComplaintForm.value.orderSelected) {
      valid = false;
      this.showMessage('Bạn phải chọn sản phẩm', 'error');
    }
    if (!this.orderComplaintForm.value.complainType) {
      valid = false;
      this.showMessage('Bạn phải chọn loại khiếu nại', 'error');
    }
    if (!this.orderComplaintForm.value.complainContent) {
      valid = false;
      this.showMessage('Bạn phải nhập nội dung khiếu nại', 'error');
    }

    return valid;
  }

  clearSuccessMessage() {
    this.updateSuccess = false;
    this.location.back();
  }

  showToast(type: string, summary: string, detail: string) {
    this.messageService.add({ severity: type, summary: summary, detail: detail, life: 4000 });
  }

  toDetailComplaint(complainId) {
    this.router.navigateByUrl(`complaint/complaint-order/${complainId}`)
  }

  cancelComplaint() {
    this._passData.loading(true);
    this.complaintServices.cancelLsComplains([this.currentComplain.complainId]).subscribe(
      resCancel => {
        if (resCancel && resCancel.result && resCancel.result.success === true) {
          this.showToast('success', 'Thành công', 'Hủy khiếu nại thành công');
          setTimeout( () => {
            this.router.navigateByUrl(`/complaint/list-complaint`)
          }, 300)
        } else {
          this._passData.loading(false);
          this.showMessage('Có lỗi xảy ra! Hãy thử lại', 'error');
        }
      },
      err => {
        this._passData.loading(false);
        this.showMessage('Có lỗi xảy ra! Hãy thử lại', 'error');
      })
  }

  confirm() {
    this.messagesUtilsService.showCustomConfirm(
      () => {
        this.cancelComplaint();
      },
      () => {},
      'Bạn muốn hủy khiếu nại này không?'
    )
  }

  refresh() {
    window.location.reload();
  }
}
