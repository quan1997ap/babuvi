import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MerchandiseServices } from '../../services/merchandise.services';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { formatDate} from '@angular/common';
@Component({
    selector: 'app-list-request-manager',
    templateUrl: './list-request-manager.component.html',
    styleUrls: ['./list-request-manager.component.scss'],
    providers: [MerchandiseServices]
})
export class ListRequestManagerComponent implements OnInit {
    msgs:any;
    clear:any;
    hinhthuc: any[]; hayhay = "i>2?'':'none'"
    trangthai: any[];
    dropdownHinhthuc: SelectItem[] = [];
    dropdownTrangthai: SelectItem[] = [];
    datas: any;
    dataFetch: any = { data: { dataCount: 0 } };
    lsDetail: any;
    columns: any;
    loading: boolean = false;
    pages = [];
    maxPage: number;
    header_mock = [
        { header: "Thông tin phiếu", field: "infoVoucher", width: "25%" },
        { header: "Thông tin nhận hàng", field: "infoReceipt", width: "70%" },
    ]

    header_mock_detail = [
        { header: "Mã kiện hàng", field: "merchandiseCode", width: "33%", align: "left" },
        { header: "Mã đơn", field: "orderCode", width: "33%", align: "left" },
        { header: "Cân nặng", field: "paymentWeight", width: "25%", align: "center" },
    ];
    nullForm = {
        DeliveryRequestCode: "",
        MerchandiseCode: "",
        OrderCode: "",
        PhoneOrName: "",
        StartDate: "",
        EndDate: "",
        Type: "",
        Status: ""
    }

    checkedAll: boolean = false;
    RowCheckedbox: number[] = [];
    AddPackageDisplay: boolean = false;
    DataPrepareForEdit: any = { code: "", weigh: "", volume: "", exchange: "", datein: "", currentWarehouse: "", position: "", status: 0 }
    constructor(
        private confirmationService: ConfirmationService,
        private merchandiseServices: MerchandiseServices,
        private router: Router,
        private messageService: MessageService,
    ) { }

    ngOnInit() {
        this.loading = true;
        this.columns = this.header_mock;
        this.merchandiseServices.searchListDeliveryRequestManager(1, 10, this.nullForm).toPromise().then(data => {
            if (data.result.success == true) {
                
                this.dataFetch = data.result;
                this.maxPage = data.result.data.pageCount;
                if (this.maxPage > 5) { this.pages = [1, 2, 3, 4, 5]; } else {
                    for (let i = 1; i <= this.maxPage; i++) {
                        this.pages.push(i);
                    }
                }
                this.datas = this.dataFetch.data.lsData;
                console.log(data)
                this.messageService.add({ key: 'dsyeucau', severity: 'success', summary: 'Thông báo', detail: 'Tải dữ liệu thành công!' });
                this.loading = false;
            } else {
                this.messageService.add({ key: 'dsyeucau', severity: 'error', summary: 'Thông báo', detail: data.message });
                this.loading = false;
            }
        })
        this.merchandiseServices.getDeliveryRequestStatus().toPromise()
            .then(trangthai => {
                if (trangthai.result.success == true) {
                    this.trangthai = trangthai;
                    // console.log("TRANG THAI",this.trangthai['result'].data);
                    this.trangthai['result'].data.forEach(element => {
                        this.dropdownTrangthai.push({ label: element.displayValue, value: element.code })
                    });
                    this.dropdownTrangthai.push({ label: "Tất cả trạng thái", value: "" })
                } else {
                    this.messageService.add({ key: 'dsyeucau', severity: 'error', summary: 'Thông báo', detail: trangthai.message });
                }
            })
        this.merchandiseServices.getDeliveryRequestType().toPromise()
            .then(hinhthuc => {
                if (hinhthuc.result.success == true) {
                    this.hinhthuc = hinhthuc;
                    // console.log("HINH THUC",this.hinhthuc['result'].data)
                    this.hinhthuc['result'].data.forEach(element => {
                        this.dropdownHinhthuc.push({ label: element.displayValue, value: element.code })
                    });
                    this.dropdownHinhthuc.push({ label: "Tất cả hình thức", value: "" })
                    console.log(this.dropdownHinhthuc)
                } else {
                    this.messageService.add({ key: 'dsyeucau', severity: 'error', summary: 'Thông báo', detail: hinhthuc.message });
                }
            })

    }

    ChonTatCa() {
        if (this.checkedAll == true) {
            this.RowCheckedbox = [];
            for (let i = 0; i < this.datas.length; i++) {
                this.RowCheckedbox.push(this.datas[i].deliveryRequestId)
            }
            console.log(this.RowCheckedbox)
        } else {
            this.RowCheckedbox = []
        }
    }

    FuncThem(e) {
        this.confirmationService.confirm({
            key: "dsyeucau",
            header: "Xác nhận",
            message: 'Thêm kiện hàng mới?',
            acceptLabel: "Có",
            rejectLabel: "Không",
            accept: () => {
                console.log(e.value);

                this.AddPackageDisplay = false;
                e.onReset();
            }
        });

    }
    FuncXoa() {
        this.confirmationService.confirm({
            key: "dsyeucau",
            header: "Xác nhận",
            message: 'Xóa các phiếu đã chọn?',
            acceptLabel: "Có",
            rejectLabel: "Không",
            accept: () => {
                this.loading = true;
                console.log(this.RowCheckedbox);
                this.merchandiseServices.deleteLsDeliveryRequest({ "lsId": this.RowCheckedbox })
                    .toPromise().then(data => {
                        if (data.result.success == true) {
                            /*Nếu gửi lệnh xóa thành công, bỏ những phiếu có id trùng với id vừa xóa trong datas trên FE*/
                            for (let i = 0; i < this.RowCheckedbox.length; i++) {
                                for (let j = 0; j < this.datas.length; j++) {
                                    if (this.datas[j].deliveryRequestId == this.RowCheckedbox[i]) {
                                        this.datas.splice(j, 1)
                                    }
                                }
                            }
                            this.RowCheckedbox = [];
                            this.messageService.add({ key: 'dsyeucau', severity: 'success', summary: 'Thông báo', detail: 'Xóa dữ liệu thành công!' });
                            this.loading = false;
                        } else {
                            this.loading = false;
                            this.messageService.add({ key: 'dsyeucau', severity: 'error', summary: 'Thông báo', detail: data.message });
                        }
                    })
            }
        });

    }
    FuncLoc(formLoc) {
        let form = formLoc.value;
        if(form.StartDate != ""){form.StartDate = formatDate(form.StartDate,'yyyy-MM-dd', 'en-US')}
        if(form.EndDate != ""){form.EndDate = formatDate(form.EndDate,'yyyy-MM-dd', 'en-US')}
        for (let key in form) {
            if (form[key] == null) { form[key] = "" }
            if (form['StartDate'] == "1970-01-01") { form['StartDate'] = ""}
            if (form['EndDate'] == "1970-01-01") { form['EndDate'] = ""}
        }
  
        this.nullForm = form;
        this.loading = true;
         //console.log(form); return;
        this.merchandiseServices.searchListDeliveryRequestManager(1, 10, form).toPromise().then(data => {
            if (data.message == "successful") {
                this.dataFetch = data.result;
                this.datas = this.dataFetch.data.lsData;
                //console.log(this.datas)
                this.maxPage = this.dataFetch.data.pageCount;
                this.selectPage(1);
                this.loading = false;
            } else {
                this.messageService.add({ key: 'dsyeucau', severity: 'error', summary: 'Thông báo', detail: data.message });
                this.loading = false;
            }
        })
    }
    ResetForm(formLoc) {
        formLoc.onReset();
    }
    goToDetailOrder(orderID) {
        console.log(orderID)
        this.router.navigate([`/ship-manager/detail-orders?orderId=${orderID}`])
    }
    GhiChu: string;
    showGhichu(form, e, string) {
        this.GhiChu = string;
        form.show(e)
    }
    hideElement: string = 'none';
    loadmore() {
        if (this.hideElement == 'none') { this.hideElement = null } else (this.hideElement = 'none')
    }
    loadDataFromServerPerPage(numb) {
        this.merchandiseServices.searchListDeliveryRequestManager(numb, 10, this.nullForm).toPromise().then(data => {
            if (data.result.success == true) {
                this.dataFetch = data.result;
                this.datas = this.dataFetch.data.lsData;
                console.log(data);
                this.messageService.add({ key: 'dsyeucau', severity: 'success', summary: 'Thông báo', detail: 'Tải dữ liệu thành công!' });
                this.loading = false;
            } else {
                this.messageService.add({ key: 'dsyeucau', severity: 'error', summary: 'Thông báo', detail: data.message });
                this.loading = false;
            }
        })
    }

    // Chuyển đổi dạng input giữa text và date
    StartDate:any ='';
    EndDate:any ='';

    numbPage: number = 1;
    selectPage(value) {
        this.loading = true;
        let maxPage = this.maxPage
    
        if (value > 0) {
          this.loadDataFromServerPerPage(value)
          this.numbPage = value;
        }
        if (value == 'n') {
          if (maxPage == this.numbPage) { this.loading = false; return }
          else {
            this.numbPage++
            this.loadDataFromServerPerPage(this.numbPage)
          }
        }
        if (value == 'p') {
          if (this.numbPage == 1) { this.loading = false; return }
          else {
            this.numbPage--;
            this.loadDataFromServerPerPage(this.numbPage)
          }
        }
        if (value == 'l') {
          this.numbPage = maxPage
          this.loadDataFromServerPerPage(maxPage)
        }
        if (value == 'f') {
          this.numbPage = 1;
          this.loadDataFromServerPerPage(1);
        }
        if (this.numbPage > 5) {
          this.pages = [this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1, this.numbPage + 2];
          if (this.numbPage + 2 > maxPage) {
            this.pages = [this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1];
            console.log(this.pages)
          }
          if (this.numbPage + 1 > maxPage) {
            this.pages = [this.numbPage - 4, this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage ];
            console.log(this.pages)
          }
        } else {
          this.pages = [];
          for (let i = 1; i <= maxPage; i++) {
            this.pages.push(i);
          }
          if (maxPage >= 4) {
            this.pages = [];
            this.pages = [1, 2, 3, 4, 5];
            if(this.numbPage == 4 && maxPage >= 6){ this.pages = [2,3,4,5,6]}
            if(this.numbPage == 5 && maxPage >= 7){ this.pages = [3,4,5,6,7]}
          }
        }
      }

        /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    messages: any[];
    showMessage(messageClass: string, detail: string): void {
        this.messages = [];
        this.messages.push({ messageClass: messageClass, detail });
        setTimeout(() => {
            this.messages = [];
        }, 3000);
    }

    buttonStatus(status) { //function trả lại kiểu class cho loại trạng thái
        //console.log(type)
        switch (status) {
          case "7": return "statusCancelStyle"; break;
          default: return "statusDefaultStyle"; break;
        }
      }
}