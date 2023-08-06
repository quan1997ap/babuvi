// angular
import { Router, ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from "@angular/core";

// models
import { ConfirmDialogModel } from '../../model/confirm-dialog.model';
import { ShipOrders } from '../../model/ship-orders.model';
import { ComplainStatusModel, ComplainModel, ComplainTypeModel } from '../../model/complain.model';

// components
import { ConfirmDialogComponent } from 'app/common-view/confirm-dialog/confirm-dialog.component';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CaptureMerchandiseComponent } from './../../warehouseimp/add/capture-merchandise/capture-merchandise.component';

// services
//import { PassDataService } from 'app/services/pass-data.services';
import { ComplaintServices } from 'app/services/complaint.services';
import { SystemService } from 'app/services/system.services';
import { OrderService } from 'app/services/order.service';
import { DialogService, ConfirmationService, MessageService } from 'primeng/api';
import { MessagesUtilsService } from '../../services/messages-utils.service';
import { FileManagerServices } from 'app/services/fileManager.services';

// other libs
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

  GhiChu: any;
  msgs = [];
  orderComplaintForm: FormGroup;
  currentOrder: ShipOrders = new ShipOrders();
  currentComplain: any = {
    complainCode: '',
    lsAttachFile: []
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
  loading: boolean = false;

  constructor(
    public messagesUtilsService: MessagesUtilsService,
    private confirmationService: ConfirmationService,
    public messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    //private _passData: PassDataService,
    private location: Location,
    private complaintServices: ComplaintServices,
    private systemService: SystemService,
    private orderService: OrderService,
    private fileManagerService: FileManagerServices,
    public dialogService: DialogService,
    public cdr: ChangeDetectorRef
    ) {
  }

  ngOnInit() {
    this.loading = true;
    window.scroll(0, 0);
    this.orderComplaintForm = this.formBuilder.group({
      complainType: new FormControl('', [Validators.required]),
      complainStatus: new FormControl('', [Validators.required]),
      complainContent: new FormControl(''),
      complainSettle: new FormControl(''),
      orderSelected: new FormControl('', [Validators.required]),
    });

    this.activeRoute.params.subscribe(params => {
      //this.currentComplain.complainId = params.complainId;
      //let detailComplaint;
      if (params.complainId) {
        this.complaintServices.getCompainById(params.complainId).subscribe(res => {
          if (res.result.success) {
            let complainRes = res.result.data;
            // mapping value for form detail
            this.currentComplain = complainRes;
            this.currentComplain.complainStatus = complainRes.status;
            this.currentComplain.orderSelected = complainRes.orderDetailId;

            this.currentOrder.orderId = complainRes.orderId;
            this.currentOrder.orderCode = complainRes.orderCode;
            this.orderDetailPage = true;
            this.getAllFormData(this.currentOrder.orderId, this.currentComplain);
          }
          else{
            this.messageService.add({ key: 'khieunai', severity: 'error', summary: 'Thông báo', detail: res.result.message });
          }
        })
      } else {
        this.currentOrder.orderId = params.orderId;
        this.currentOrder.orderCode = params.orderCode;
        this.orderDetailPage = false;

        this.getAllFormData(this.currentOrder.orderId, this.currentComplain);
      }
      this.loading = false;
    })
  }

  loadData(){
    this.complaintServices.getCompainById(this.currentComplain.complainId).subscribe(res => {
      if (res.result.success) {
        let complainRes = res.result.data;
        // mapping value for form detail
        this.currentComplain = complainRes;
        this.currentComplain.complainStatus = complainRes.status;
        this.currentComplain.orderSelected = complainRes.orderDetailId;

        this.currentOrder.orderId = complainRes.orderId;
        this.currentOrder.orderCode = complainRes.orderCode;
        this.orderDetailPage = true;
        this.getAllFormData(this.currentOrder.orderId, this.currentComplain);
      }
      else{
        this.messageService.add({ key: 'khieunai', severity: 'error', summary: 'Thông báo', detail: res.result.message });
      }
    })
  }

  getAllFormData(orderId, detailComplaint?) {
    this.loading = true;
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
      this.loading = false;
      this.loadDataSuccess = true;
    }, error => {
      this.loading = false;
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
        ComplainId: this.currentComplain.complainId,
        OrderId: this.currentOrder.orderId,
        OrderCode: this.currentOrder.orderCode,
        OrderDetailId: orderSelected.orderDetailId,
        ItemCode: orderSelected.itemCode,
        ComplainType: this.orderComplaintForm.value.complainType,
        ComplainContent: this.orderComplaintForm.value.complainContent,
        ComplainSettle: this.orderComplaintForm.value.complainSettle,
        Status: this.orderComplaintForm.value.complainStatus,
        lsAttachFile: this.currentComplain.lsAttachFile
      }
      this.loading = true;
      this.complaintServices.sendComplaint(complaintParam).subscribe(
        res => {
          if (res.result && res.result.success === true) {
            this.loading = false;
            this.messageService.add({ key: 'khieunai', severity: 'success', summary: 'Thông báo', detail: 'Tạo khiếu nại thành công' });
            setTimeout(() => {
              this.router.navigateByUrl('/complaint/list-complaint')
            }, 1000)
          } else {
            this.messageService.add({ key: 'khieunai', severity: 'error', summary: 'Thông báo', detail: res.result.message });
            this.loading = false;
          }
        },
        errAddCoplaint => {
          this.messageService.add({ key: 'khieunai', severity: 'error', summary: 'Thông báo', detail: 'Có lỗi xảy ra, hãy thử lại!' });
          this.loading = false;
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
    this.loading = true;
    this.complaintServices.cancelLsComplains([this.currentComplain.complainId]).subscribe(
      resCancel => {
        if (resCancel && resCancel.result && resCancel.result.success === true) {
          this.messageService.add({ key: 'khieunai', severity: 'success', summary: 'Thông báo', detail: 'Hủy khiếu nại thành công' });
          setTimeout( () => {
            this.router.navigateByUrl(`/complaint/list-complaint`)
          }, 300)
        } else {
          this.loading = false;
          this.messageService.add({ key: 'khieunai', severity: 'error', summary: 'Thông báo', detail: 'Có lỗi xảy ra! Hãy thử lại' });
        }
      },
      err => {
        this.loading = false;
        this.messageService.add({ key: 'khieunai', severity: 'error', summary: 'Thông báo', detail: 'Có lỗi xảy ra! Hãy thử lại' });
      })
  }

  confirm() {
    if (confirm('Bạn muốn hủy khiếu nại này không?')) {
      this.cancelComplaint();
    }
  }

  refresh() {
    window.location.reload();
  }

  fileUpload: any;
  onChangeFile(e) {
    if (e.target.files[0] == undefined) {
    } else {
      this.fileUpload = e.target.files[0];
    }
  }

  dinhkemFile() {
    this.loading = true;
    let formdat = new FormData();
    formdat.append('file', this.fileUpload);
    // this.blockScreen = true;
    this.fileManagerService.uploadFile(formdat).toPromise().then(data => {
      if (data.result.success) {
        let form = { value: data.result.data };
        this.AddAttachFile(form, "panel");
        (document.getElementById("attackData") as HTMLInputElement).value = "";
        this.messageService.add({ key: 'chitietcv', severity: 'success', summary: 'Thông báo', detail: "Tải lên thành công!" });
      } else {
        //this.blockScreen = false;
        this.loading = false;
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })
  }

  AddAttachFile(form, panel) {
    let attachFile = {
      attachLink: form.value.attachLink,
      attachName: form.value.attachName,
      type: form.value.type,
      refId: null,
      sourceId: form.value.sourceId,
      timeOut: form.value.timeOut,
    }
    this.loading = true;
    if (this.currentComplain.complainId != null) {
      attachFile.refId = this.currentComplain.complainId;
      this.complaintServices.addComplaintAttachFile(attachFile).toPromise().then(data => {
        if (data.result.success) {
          this.loadData();
          this.loading = false;
        } else {
          this.loading = false;
        }
      })
    }
    else {
      this.currentComplain.lsAttachFile.push(attachFile);
      this.cdr.detectChanges();
      this.loading = false;
    }
  }

  getLink(link) {
    if (link != null) {
      if (link.indexOf("https://") != -1) { return link }
      else { return "https://" + link }
    }
  }

  previewLink(link){
    //Hien thi anh
    if (link.type == '1') {
      let lsImage = [link];
      //this.isImage = true;
      this.viewImgs(lsImage);
    } else {
      window.open(link.attachLink, "_blank");
    };
  }

  viewImgs(imgLinks) {
    const ref = this.dialogService.open(CaptureMerchandiseComponent, {
      header: "Ảnh chụp kiện hàng",
      width: "100vw",
      style: { "max-width": "700px", "overflow-y": "auto" },
      closable: false,
      data: {
        imgLinks: imgLinks,
        action: "viewHistoryImg",
      },
    });

    //cập nhật lại thông tin hình ảnh sau khi đóng view ảnh
    ref.onClose.subscribe((capturedImgs: any[]) => {
      if (capturedImgs) {
        //cập nhật từng ảnh 1
        capturedImgs.forEach((itemImg) => {
          //Lấy thông tin index của ảnh trong list attachfile bằng id
          let itemIndex = this.currentComplain.lsAttachFile.findIndex(item => item.attachFileId == itemImg.attachFileId);
          this.currentComplain.lsAttachFile[itemIndex] = itemImg;
        });
        this.cdr.detectChanges();
      }
    });
  }
}
