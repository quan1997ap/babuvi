import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MerchandiseServices } from 'app/services/merchandise.services';
import { SystemService } from 'app/services/system.services';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-merchandise',
  templateUrl: './list-merchandise.component.html',
  styleUrls: ['./list-merchandise.component.scss'],
  providers: [MerchandiseServices]
})
export class ListMerchandiseComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private merchandiseServices: MerchandiseServices,
    private systemService: SystemService,
    private router: Router,
    private messageService: MessageService,

  ) { }
  OpenFormAdd:any;
  datas: any = {data:{dataCount:0}};
  lsDetail: any;
  columns: any;
  header_mock = [
    { header: "Mã kiện hàng", field: "merchandiseCodeCustomer", width: "11%", type: "text" },
    { header: "Cân nặng", field: "paymentWeight", width: "8%", type: "text" },
    { header: "Thể tích", field: "thetich", width: "8%", type: "text" },
    { header: "Mã đơn", field: "orderCode", width: "13%", type: "text" },
    { header: "Kho lưu", field: "warehouseName", width: "11%", type: "text" },
    { header: "Vị trí kệ", field: "shelfPosition", width: "9%", type: "date" },
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
  maxPage:number;
  pages:any = [];
  DropdownTrangthai :any =[];
  ngOnInit() {
    this.loading = true;
    this.columns = this.header_mock;
    this.merchandiseServices.searchMerchandise(1, 10, this.formRequest).toPromise().then(data => {
      if (data.result.success) {
        this.datas = data.result;
        this.lsDetail = this.datas.data.lsData;
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
  ChonTatCa(datas) {
    if (this.checkedAll == true) {
      this.RowCheckedbox = [];
      for (let i = 0; i < this.datas.length; i++) {
        this.RowCheckedbox.push(this.datas[i].merchandiseId.toString())
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
    //this._passData.loading(true);
    //this._passData.setOrders(data);
    //console.log(data);
    //this.router.navigate(['ship-manager/detail-orders/'], { queryParams: { orderId: data.orderId } });
    this.returnLinkOrder = window.location.href.replace(this.router.url,`/ship-manager/detail-orders?orderId=${orderId}`);
  }

  async loadDataFromServerPerPage(value){
     await this.merchandiseServices.searchMerchandise(value, 10, this.formRequest).toPromise().then(async data => {
      if (data.result.success) {
        this.datas = data.result;
        this.lsDetail = this.datas.data.lsData
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
}
