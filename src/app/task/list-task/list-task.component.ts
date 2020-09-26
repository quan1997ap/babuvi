import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TaskServices } from '../../services/task.services';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate} from '@angular/common';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  providers: [TaskServices]
})
export class ListTaskComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private taskServices: TaskServices,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }
  GhiChu:any;
  datas: any;
  loaiThamChieu: any = [];
  loaiCongViec: any = [];
  TrangThai: any = [];
  loading: boolean = false;
  columns: any;
  dataFetch: any = { data: { dataCount: 0 } };
  maxPage: number;
  pages = [];
  nullForm = {
    TaskCode: null,
    RefCode: null,
    RefType: null,
    StartDate: null,
    EndDate: null,
    TaskType: null,
    TaskStatus: null
  };
  checkedAll: boolean = false;
  RowCheckedbox: string[] = [];
  header_mock = [
    { header: "Mã công việc", field: "taskCode", width: "9%", type: "text" },
    { header: "Loại công việc", field: "typeDisplay", width: "9%", type: "text" },
    { header: "Nội dung", field: "taskName", width: "21%", type: "text" },
    { header: "Mã tham chiếu", field: "refCode", width: "10%", type: "text" },
    { header: "Người xử lý", field: "lsMember", width: "10%", type: "text" },
    { header: "Ngày tạo", field: "createdDate", width: "10%", type: "date" },
    { header: "Hạn hoàn thành", field: "dueDate", width: "12%", type: "date" },
    { header: "Trạng thái", field: "statusDisplay", width: "9%", type: "text" },
  ]
  vn: any; // Đổi tên lịch sang tiếng việt
  ngOnInit() {
    this.loading = true;
    this.columns = this.header_mock;
    this.taskServices.getTaskList(1, 10, this.nullForm).toPromise().then(data => {
      console.log(data)
      if (data.result.success == true) {
        this.dataFetch = data.result;
        this.datas = this.dataFetch.data.lsData;
        console.log(this.datas)
        this.maxPage = data.result.data.pageCount;
        if (this.maxPage > 5) { this.pages = [1, 2, 3, 4, 5]; } else {
          for (let i = 1; i <= this.maxPage; i++) {
            this.pages.push(i);
          }
        }
        this.datas.forEach(e=> {if(!e.isLated){console.log(e)}})
        this.messageService.add({ key: 'dscongviec', severity: 'success', summary: 'Thông báo', detail: 'Tải dữ liệu thành công!' });
        this.loading = false;
      } else {
        this.messageService.add({ key: 'dscongviec', severity: 'error', summary: 'Thông báo', detail: data.message });
        this.loading = false;
      }
    });
    this.taskServices.getTaskRefType().toPromise().then(data => {
      if (data.result.success == true) {
        console.log("LOAITCHIEU", data)
        let array: any[] = data.result.data;
        array.forEach(e => {
          this.loaiThamChieu.push({ label: e.displayValue, value: e.value })
        })
        this.loaiThamChieu.push({ label: "Tất cả loại tham chiếu", value: null })
      } else {
        this.messageService.add({ key: 'dscongviec', severity: 'error', summary: 'Thông báo', detail: data.message });
      }
    })
    this.taskServices.getTaskType().toPromise().then(data => {
      if (data.result.success == true) {
        let array: any[] = data.result.data;
        array.forEach(e => {
          this.loaiCongViec.push({ label: e.displayValue, value: e.value })
        })
        this.loaiCongViec.push({ label: "Tất cả loại công việc", value: null })
        console.log("LOAICV", data)
      } else {
        this.messageService.add({ key: 'dscongviec', severity: 'error', summary: 'Thông báo', detail: data.message });

      }
    })
    this.taskServices.getTaskStatus().toPromise().then(data => {
      if (data.result.success == true) {
        console.log("Trnagthai", data)
        let array: any[] = data.result.data;
        array.forEach(e => {
          this.TrangThai.push({ label: e.displayValue, value: e.value })
        })
        this.TrangThai.push({ label: "Tất cả trạng thái", value: null })
      } else {
        this.messageService.add({ key: 'dscongviec', severity: 'error', summary: 'Thông báo', detail: data.message });
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
        this.RowCheckedbox.push(this.datas[i].taskId)
      }
      console.log(this.RowCheckedbox)
    } else {
      this.RowCheckedbox = []
    }
  }

  FuncThem() {
    this.confirmationService.confirm({
      key: "dscongviec",
      header: "Xác nhận",
      message: 'Thêm kiện hàng mới?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        alert("Chưa có api thêm")
      }
    });

  }
  FuncSua(){alert("Chưa có api sửa")}
  FuncXoa() { alert("Chưa có api xóa")}

  FuncLoc(formLoc) {
    this.loading = true;
    let form = formLoc.value;
    if(form.StartDate != ""){form.StartDate = formatDate(form.StartDate,'yyyy-MM-dd', 'en-US')}
    if(form.EndDate != ""){form.EndDate = formatDate(form.EndDate,'yyyy-MM-dd', 'en-US')}
    for (let key in form) {
      if (form[key] == "") { form[key] = null }
      if (form['StartDate'] == "1970-01-01") { form['StartDate'] = null}
      if (form['EndDate'] == "1970-01-01") { form['EndDate'] = null}
    }
    this.nullForm = form;
    if (form['RefCode'] != null && (form['RefType'] == null || form['RefType'].trim() == '')){
      this.messageService.add({ key: 'dscongviec', severity: 'warn', summary: 'Thông báo', detail: 'Vui lòng chọn loại tham chiếu kèm theo!' });
      this.loading = false;
      return false;
    }
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
      case "5": return "btnThemVanDon"; break;
      case "6": return "btnCapNhatVanDon"; break;
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
    await this.taskServices.getTaskList(numb, 10, this.nullForm).toPromise().then(async data => {console.log(data)
      if (data.result.success == true) {
        this.dataFetch = data.result;
        this.datas = this.dataFetch.data.lsData;
        this.maxPage = await data.result.data.pageCount
        //console.log(data);
        this.messageService.add({ key: 'dscongviec', severity: 'success', summary: 'Thông báo', detail: 'Tải dữ liệu thành công!' });
        this.loading = false;
      } else {
        this.messageService.add({ key: 'dscongviec', severity: 'error', summary: 'Thông báo', detail: data.message });
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
    await 1;console.log(this.maxPage)
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

  // goToTaskDetail(taskId){
  //   this.router.navigate(['task/task-detail'],{queryParams:{id:taskId}})
  // }

  // goToOrder(refId,refType){
  //   switch(refType){
  //     case "1":
  //       //this.router.navigate([`/ship-manager/detail-orders?orderId=${refId}`]);
  //       this.router.navigate(['ship-manager/detail-orders'],{queryParams:{orderId:refId}})
  //       break;
  //     case "2":
  //       alert("Chưa làm chi tiết kiện hàng")
  //       break;
  //   }
  // }

  returnLink:string;
  getCurrentLink(taskId){
    let url = window.location.href.replace(this.router.url,`/task/task-detail?id=${taskId}`);
    this.returnLink = url;
  }

  returnLinkOrder:string;
  goToOrder(refId,refType){
    switch(refType){
      case "1":
        this.returnLinkOrder = window.location.href.replace(this.router.url,`/ship-manager/detail-orders?orderId=${refId}`);
        break;
      case "2":
        alert("Chưa làm chi tiết kiện hàng")
        break;
    }
  }
}