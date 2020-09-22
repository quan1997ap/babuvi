import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { formatDate } from '@angular/common';
import { ReceiptService } from 'app/services/receipt.services';
import { SystemService } from 'app/services/system.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-receipt',
  templateUrl: './list-receipt.component.html',
  styleUrls: ['./list-receipt.component.scss'],
  providers: [
      ReceiptService,
      SystemService
    ]
})
export class ListReceiptComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private receiptService: ReceiptService,
    private systemService: SystemService,
    private router: Router,
    private messageService: MessageService,

  ) { }
  datas: any;
  DropdownLydo: any = [];
  DropdownTrangThai: any = [];
  loading: boolean = false;
  columns: any;
  dataFetch: any = { data: { dataCount: 0 } };
  maxPage: number;
  pages = [];
  nullForm = {
    "ReceiptCode": null,
    "StartDate": null,
    "EndDate": null,
    "Status": null,
    "Reasion": null,
    "Content": null
  };
  checkedAll: boolean = false;
  RowCheckedbox: string[] = [];
  header_mock = [
    { header: "Mã biên lai", field: "receiptCode", width: "14%", type: "text" },
    { header: "Số tiền", field: "amount", width: "10%", type: "text" },
    { header: "Lý do", field: "reasionDisplay", width: "13%", type: "text" },
    { header: "Nội dung", field: "description", width: "31%", type: "text" },
    { header: "Ví nguồn", field: "walletSourceName", width: "11%", type: "text" },
    { header: "Ví đích", field: "walletDestinationName", width: "11%", type: "text" },
    { header: "Trạng thái", field: "statusDisplay", width: "11%", type: "text" },
  ]
  vn: any; // Đổi tên lịch sang tiếng việt
  ngOnInit() {
    this.loading = true;
    this.columns = this.header_mock;
    this.receiptService.searchReceipt(1, 10, this.nullForm).toPromise().then(data => {
      console.log(data)
      if (data.result.success == true) {
        this.dataFetch = data.result;
        this.datas = this.dataFetch.data.lsData;
        this.datas.forEach(e => {if (e.symbolsLocation != '1'){console.log(e)}});
        this.maxPage = data.result.data.pageCount;
        if (this.maxPage > 5) { this.pages = [1, 2, 3, 4, 5]; } else {
          for (let i = 1; i <= this.maxPage; i++) {
            this.pages.push(i);
          }
        }
        this.messageService.add({ key: 'dsbienlai', severity: 'success', summary: 'Thông báo', detail: 'Tải dữ liệu thành công!' });
        this.loading = false;
      } else {
        this.messageService.add({ key: 'dsbienlai', severity: 'error', summary: 'Thông báo', detail: data.message });
        this.loading = false;
      }
    });
    this.systemService.GetReasion().toPromise().then(data => {
      if (data.result.success == true) {
        let array: any[] = data.result.data;
        array.forEach(e => {
          this.DropdownLydo.push({ label: e.displayValue, value: e.value })
        })
        this.DropdownLydo.push({ label: "Tất cả lý do", value: null })
        console.log("lydo", data)
      } else {
        this.messageService.add({ key: 'dsbienlai', severity: 'error', summary: 'Thông báo', detail: data.message });

      }
    })
    this.systemService.GetReceiptStatus().toPromise().then(data => {
      if (data.result.success == true) {
        console.log("Trnagthai", data)
        let array: any[] = data.result.data;
        array.forEach(e => {
          this.DropdownTrangThai.push({ label: e.displayValue, value: e.value })
        })
        this.DropdownTrangThai.push({ label: "Tất cả trạng thái", value: null })
      } else {
        this.messageService.add({ key: 'dsbienlai', severity: 'error', summary: 'Thông báo', detail: data.message });
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
        this.RowCheckedbox.push(this.datas[i].deliveryRequestId.toString())
      }
      console.log(this.RowCheckedbox)
    } else {
      this.RowCheckedbox = []
    }
  }

  FuncThem(e) {
    this.confirmationService.confirm({
      key: "dsbienlai",
      header: "Xác nhận",
      message: 'Thêm kiện hàng mới?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        alert("Chưa có api thêm")
      }
    });

  }
  FuncSua() { alert("Chưa có api sửa") }
  FuncXoa() { alert("Chưa có api xóa") }

  FuncLoc(formLoc) {
    this.loading = true;
    let form = formLoc.value;
    if (form.StartDate != "") { form.StartDate = formatDate(form.StartDate, 'dd-MM-yyyy', 'en-US') }
    if (form.EndDate != "") { form.EndDate = formatDate(form.EndDate, 'dd-MM-yyyy', 'en-US') }
    for (let key in form) {
      if (form[key] == "") { form[key] = null }
      if (form['StartDate'] == "01-01-1970") { form['StartDate'] = null }
      if (form['EndDate'] == "01-01-1970") { form['EndDate'] = null }
    }
    console.log(formLoc.value);
    this.nullForm = form;
    this.selectPage(1)
  }
  ResetForm(formLoc) {
    formLoc.onReset();
  }

  buttonType(type) { //function trả lại kiểu class cho loại công việc
    //console.log(type)
    switch (type) {
      case "1": return "btnDatHang"; break;
      case "2": return "btnCSKH"; break;
      case "3": return "btnThanhToan"; break;
      case "4": return "btnKhieuNai"; break;
    }
  }
  buttonStatus(status) { //function trả lại kiểu class cho loại trạng thái 
    switch (status) {
      case "1": return "btnTaoMoi"; break;
      case "2": return "btnDangthuchien"; break;
      case "3": return "btnHoanthanh"; break;
      case "4": return "btnHuy"; break;
    }
  }

  async loadDataFromServerPerPage(numb) {
    await this.receiptService.searchReceipt(numb, 10, this.nullForm).toPromise().then(async data => {
      console.log(data)
      if (data.result.success == true) {
        this.dataFetch = data.result;
        this.datas = this.dataFetch.data.lsData;
        this.maxPage = await data.result.data.pageCount
        //console.log(data);
        this.messageService.add({ key: 'dsbienlai', severity: 'success', summary: 'Thông báo', detail: 'Tải dữ liệu thành công!' });
        this.loading = false;
      } else {
        this.messageService.add({ key: 'dsbienlai', severity: 'error', summary: 'Thông báo', detail: data.message });
        this.loading = false;
      }
    })
  }

  // Chuyển đổi dạng input giữa text và date
  StartDate: any = '';
  EndDate: any = '';
  numbPage: number = 1;
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
    if (this.numbPage > 5) {console.log(1)
      this.pages = [this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1, this.numbPage + 2];
      if (this.numbPage + 2 > this.maxPage) {
        this.pages = [this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1];
        console.log(this.pages)
      }
      if (this.numbPage + 1 > this.maxPage) {
        this.pages = [this.numbPage - 4, this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage ];
        console.log(this.pages)
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
      console.log(this.pages)
    }
  };

  goToTaskDetail(taskId) {
    this.router.navigate(['ship-manager/task-detail'], { queryParams: { id: taskId } })
  }

  goToOrder(refId, refType) {
    switch (refType) {
      case "1":
        this.router.navigate([`/ship-manager/detail-orders?orderId=${refId}`]);
        break;
      case "2":
        alert("Chưa làm chi tiết kiện hàng")
        break;
    }
  }

  money_format(nStr: string,kihieu, vitri) {
    let kq: string = "";
    if (parseFloat(nStr) == 0) {
      kq = "";
    } else {
      nStr += "";
      let x = nStr.split(",");
      let x1 = x[0];
      let x2 = x.length > 1 ? "," + x[1] : "";
      let rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "." + "$2");
      }
      kq = x1 + x2 + kihieu;
      switch(vitri){
        case '1':
          kq = x1 + x2 + ' ' + kihieu;
          break;
        case '2': 
          kq = kihieu + ' ' + x1 + x2;
      }
    }
    return kq;
  }
}