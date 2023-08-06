import { Component, OnInit } from '@angular/core';
import { DialogService, ConfirmationService, MessageService } from 'primeng/api';
import { MerchandiseServices } from 'app/services/merchandise.services';
import { SystemService } from 'app/services/system.services';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { CaptureMerchandiseComponent } from './../../warehouseimp/add/capture-merchandise/capture-merchandise.component';
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'app-list-merchandise-manager',
  templateUrl: './list-merchandise-manager.component.html',
  styleUrls: ['./list-merchandise-manager.component.scss'],
  providers: [MerchandiseServices]
})
export class ListMerchandiseManagerComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private merchandiseServices: MerchandiseServices,
    private systemService: SystemService,
    private router: Router,
    private messageService: MessageService,
    public dialogService: DialogService,
    public cdr: ChangeDetectorRef

  ) { }
  OpenFormAdd:any;
  datas: any;
  //lsDetail: any;
  columns: any;
  header_mock = [
    { header: "Mã vận đơn", field: "merchandiseCode", width: "11%", type: "text" },
    { header: "Mã kiện hàng", field: "merchandiseCodeCustomer", width: "11%", type: "text" },
    { header: "Cân nặng", field: "paymentWeight", width: "8%", type: "text" },
    { header: "Thể tích", field: "thetich", width: "8%", type: "text" },
    { header: "Mã đơn", field: "orderCode", width: "13%", type: "text" },
    { header: "Kho lưu", field: "warehouseName", width: "11%", type: "text" },
    { header: "Vị trí kệ", field: "shelfPosition", width: "9%", type: "date" },
    { header: "Ghi chú", field: "description", width: "9%", type: "date" },
    { header: "Lịch sử", field: "lichsu", width: "26%", type: "date" },
    { header: "Trạng thái", field: "statusDisplay", width: "14%", type: "text" },
  ]

  checkedAll: boolean = false;
  RowCheckedbox: string[] = [];

  formRequest = {
    'StartDate': null,
    'EndDate': null,
    'Status': null,
    'MerchandiseCode': null,
    'OrderCode': null
  };
  vn:any;
  StartDate: any = '';
  EndDate: any = '';
  loading:boolean = false;
  dataFetch: any = { data: { dataCount: 0 } };
  maxPage:number;
  pages:any = [];
  DropdownTrangthai :any =[];

  ngOnInit() {
    this.loading = true;
    this.columns = this.header_mock;
    this.merchandiseServices.searchMerchandiseManager(1, 10, this.formRequest).toPromise().then(data => {
      if (data.result.success) {
        this.dataFetch = data.result;
        this.datas = this.dataFetch.data.lsData;
        this.maxPage = data.result.data.pageCount;
        if (this.maxPage > 5) { this.pages = [1, 2, 3, 4, 5]; } else {
          for (let i = 1; i <= this.maxPage; i++) {
            this.pages.push(i);
          }
        }
        this.messageService.add({ key: 'dskienhang', severity: 'success', summary: 'Thông báo', detail: "Tải dữ liệu thành công" });
        this.loading = false;
      } else {
        this.messageService.add({ key: 'dskienhang', severity: 'error', summary: 'Thông báo', detail: data.message });
        this.loading = false;
      }
    })

    this.systemService.getOrderStatus().toPromise().then(data=> {
      if(data.result.success){
        let arr = [];
        arr = data.result.data;
        this.DropdownTrangthai.push({label:"Tất cả trạng thái",value:null})
        arr.forEach(e=>this.DropdownTrangthai.push({label:e.displayValue,value:e.value}))
      }
    })
    this.vn = {
      firstDayOfWeek: 0,
      dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
      dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      today: 'Hôm nay',
      clear: 'Xóa',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'tuần'
    };
  }

  ChonTatCa() {
    if (this.checkedAll == true) {
        this.RowCheckedbox = [];
        for (let i = 0; i < this.datas.length; i++) {
            this.RowCheckedbox.push(this.datas[i].merchandiseId)
        }
    } else {
        this.RowCheckedbox = []
    }
}
  FuncThem(e) {
    this.confirmationService.confirm({
      key: "dskienhang",
      header: "Xác nhận",
      message: 'Thêm kiện hàng mới?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        alert("Chưa có api")
      }
    });

  }
  FuncXoa() {alert("Chưa có api") }

  FuncLoc(formLoc) {
    let form = formLoc.value;

    for (let key in form) {
      if (form[key] == "") { form[key] = null };
      if (key == 'StartDate' && form[key]!=null){
        form[key]= formatDate(form[key], 'yyyy-MM-ddTHH:mm:ss.SSS', 'en-US');
      }
      if (key == 'EndDate' && form[key]!=null){
        form[key]= formatDate(form[key], 'yyyy-MM-ddTHH:mm:ss.SSS', 'en-US');
      }
    }
    this.formRequest = form;
    this.selectPage(1)
  }
  ResetForm(formLoc) {
    formLoc.onReset();
  }

  returnLinkOrder:string;
  redirect(orderId) {
    this.returnLinkOrder = window.location.href.replace(this.router.url,`/ship-manager/detail-orders-manager?orderId=${orderId}`);
  }

  async loadDataFromServerPerPage(value){
     await this.merchandiseServices.searchMerchandiseManager(value, 10, this.formRequest).toPromise().then(async data => {
      if (data.result.success) {
        this.dataFetch = data.result;
        this.datas = this.dataFetch.data.lsData;
        this.maxPage = await data.result.data.pageCount;
        await 1;
        if (this.maxPage > 5) { this.pages = [1, 2, 3, 4, 5]; } else {
          for (let i = 1; i <= this.maxPage; i++) {
            this.pages.push(i);
          }
        }
        this.loading = false;
      } else {
        this.messageService.add({ key: 'dskienhang', severity: 'error', summary: 'Thông báo', detail: data.message });
        this.loading = false;
      }
    })
  }
  numbPage:number = 1;
  async selectPage(value) {
    this.loading = true;
    let maxPage = this.maxPage

    if (value > 0) {
      await this.loadDataFromServerPerPage(value)
      this.numbPage = value;
    }
    if (value == 'n') {
      if (maxPage == this.numbPage) { this.loading = false; return }
      else {
        this.numbPage++
        await this.loadDataFromServerPerPage(this.numbPage)
      }
    }
    if (value == 'p') {
      if (this.numbPage == 1) { this.loading = false; return }
      else {
        this.numbPage--;
        await this.loadDataFromServerPerPage(this.numbPage)
      }
    }
    if (value == 'l') {
      this.numbPage = maxPage
      await this.loadDataFromServerPerPage(maxPage)
    }
    if (value == 'f') {
      this.numbPage = 1;
      await this.loadDataFromServerPerPage(1);
    }
    await 1;
    if (this.numbPage > 5) {
      this.pages = [this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1, this.numbPage + 2];
      if (this.numbPage + 2 > this.maxPage) {
        this.pages = [this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1];
      }
      if (this.numbPage + 1 > this.maxPage) {
        this.pages = [this.numbPage - 4, this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage ];
      }
    } else {
      this.pages = [];
      for (let i = 1; i <= this.maxPage; i++) {
       this.pages.push(i);
      }
      if (this.maxPage > 4) {
        this.pages = [];
        this.pages = [1, 2, 3, 4, 5];
        if(this.numbPage == 4 && this.maxPage >= 6){ this.pages = [2,3,4,5,6]}
        if(this.numbPage == 5 && this.maxPage >= 7){ this.pages = [3,4,5,6,7]}
      }
    }
  };

  returnTimeFormatInHistory(time){
    return formatDate(time, 'HH:mm dd/MM/yyyy', 'en-US');
  }
  
  viewImgs(data) {
    if(data.lsAttachFile.length > 0)
    {
      const ref = this.dialogService.open(CaptureMerchandiseComponent, {
        header: "Ảnh chụp kiện hàng",
        width: "100vw",
        style: { "max-width": "700px", "overflow-y": "auto" },
        closable: false,
        data: {
          imgLinks: data.lsAttachFile,
          action: "viewHistoryImg",
        },
      });
      //cập nhật lại thông tin hình ảnh sau khi đóng view ảnh
      ref.onClose.subscribe((capturedImgs: any[]) => {
        if (capturedImgs) {
            //lấy thông tin bản ghi cần cập nhật trong list datas
            let itemIndex = this.datas.findIndex(item => item.merchandiseCode == data.merchandiseCode);
           this.datas[itemIndex].lsAttachFile = capturedImgs;
          this.cdr.detectChanges();
        }
      });
    }
  }
}
