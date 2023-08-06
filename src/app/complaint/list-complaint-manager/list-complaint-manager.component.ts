import { MessagesUtilsService } from '../../services/messages-utils.service';
import { AfterViewInit, Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { ComplaintServices } from 'app/services/complaint.services';
import { ClientProfile } from 'app/model/client-profile.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { PassDataService } from 'app/services/pass-data.services';
import { MessageService } from 'primeng/components/common/api';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-list-complaint-manager',
  templateUrl: './list-complaint-manager.component.html',
  styleUrls: ['./list-complaint-manager.component.scss']
})
export class ListComplaintManagerComponent implements OnInit, AfterViewInit {

  pageEvent:any;
  filterConditions = {
    ComplainCode: '',
    OrderCode: '',
    ItemCode: '',
    StartDate: null,
    EndDate: null,
    ComplainStatus: ''
  }

  complaintIdSelecteds: string[] = [];

  private account: ClientProfile;
  msgs: Message[] = [];
  complaintList: any = [];
  dataCount: number;
  pageSize: number = 10;
  pageIndex: number = 1;
  currentDate = new Date();
  mobileVersion = false;
  checkedAll = false;
  constructor(
    public messagesUtilsService: MessagesUtilsService,
    public messageService: MessageService,
    private cdr: ChangeDetectorRef,
    private _passData: PassDataService,
    private complaintServices: ComplaintServices,
    private router: Router,
    public dialog: MatDialog) {
    this._passData.loading(true);
  }
  ngOnInit() {
    if (window.innerWidth <= 800) {
      this.mobileVersion = true;
    } else {
      this.mobileVersion = false;
    }
    this.account = JSON.parse(localStorage.getItem('userData'));
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 800) {
      this.mobileVersion = true;
    } else {
      this.mobileVersion = false;
    }
  }

  ngAfterViewInit() {
    this.getComplaints(this.pageIndex, this.pageSize, this.filterConditions);
  }

  getComplaints(pageIndex, pageSize, filterConditions) {
    this.complaintList = [];
    this._passData.loading(true);
    this.clear();
    this.complaintServices.getComplaintsManager(pageIndex, pageSize, filterConditions).subscribe(res => {
      if (res.result.success && res.result.data && res.result.data.lsData) {
        this.complaintList = res.result.data.lsData;
        // page
        this.dataCount = res.result.data.dataCount;
        this.cdr.detectChanges();
      } else {
        this.showMessage('Có lỗi xảy ra! Hãy thử lại', 'error');
      }
      this._passData.loading(false);
    }, error => {
      this.showMessage('Có lỗi xảy ra! Hãy thử lại', 'error');
      this._passData.loading(false);
    });
  }

  detectPage(event: any) {
    const lastPage = Math.floor(event.length / event.pageSize);
    if (event.previousPageIndex > event.pageIndex) {
      // click pre btn
      // PageIndex of APIstart with 1
      this.pageIndex = event.pageIndex === 0 ? 1 : this.pageIndex - 1;
    } else {
      // click next btn
      this.pageIndex = event.pageIndex === lastPage ? lastPage + 1 : this.pageIndex + 1;
    }
  }

  getComplaintsByPageIndex(event) {
    this._passData.loading(true);
    this.detectPage(event);
    this.getComplaints(this.pageIndex, this.pageSize, this.filterConditions);
  }

  clear() {
    this.msgs = [];
  }

  showToast(type: string, summary: string, detail: string) {
    this.messageService.add({ severity: type, summary: summary, detail: detail, life: 4000 });
  }

  showMessage(str: string, type: string) {
    const _self = this;
    _self.msgs = [];
    _self.msgs.push({ severity: type, summary: str, detail: '' });
    setTimeout(function () {
      _self.clear();
    }, 10000);
  }

  returnDetailComplaint: string;
  toDetailComplaint(complainId) {
    this.returnDetailComplaint = window.location.href.replace(this.router.url,`/complaint/handle-complaint/${complainId}`);
  }

  returnOrderUrl: string;
  goToOrder(orderId) {
    this.returnOrderUrl = window.location.href.replace(this.router.url,`/ship-manager/detail-orders?orderId=${orderId}`);
  }

  cancelComplaint() {
    this.messagesUtilsService.showCustomConfirm(
      () => {
        this._passData.loading(true);
        this.complaintServices.cancelLsComplains(this.complaintIdSelecteds).subscribe(
          resCancel => {
            if (resCancel && resCancel.result && resCancel.result.success === true) {
              this.complaintIdSelecteds = [];
              this.getComplaints(this.pageIndex, this.pageSize, this.filterConditions);
              this.showToast('success', 'Thành công', 'Hủy khiếu nại thành công');
            } else {
              this._passData.loading(false);
              this.showMessage('Có lỗi xảy ra! Hãy thử lại', 'error');
            }
          },
          err => {
            this._passData.loading(false);
            this.showMessage('Có lỗi xảy ra! Hãy thử lại', 'error');
          })
      },
      () => { },
      'Bạn muốn hủy các khiếu nại này không?'
    )
  }

  toDetailSelectedComplaint() {
    const lastId = this.complaintIdSelecteds.pop();
    this.router.navigateByUrl(`complaint/handle-complaint/${lastId}`);
  }

  checkAllComplaints(checked) {
    if (checked) {
      this.complaintIdSelecteds = this.complaintList.map(complaint => complaint.complainId);
    } else {
      this.complaintIdSelecteds = [];
    }
  }
}
