import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import {OrderDetailRO, OrderHistory, Merchandise, Receipt, Complain, OrderChat, LOrderDetail} from 'app/model/ro/order-detail.model';
import {ChatDTO} from 'app/model/dto/chat.model';
import {OrderDetailService} from 'app/services/order-detail.service';
import {PaymentOrdersComponent} from '../../payment-orders/payment-orders.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PassDataService } from 'app/services/pass-data.services';
import { Message } from 'primeng/api';
import {ShipManagerService} from "../../services/ship-manager.service";
// import {ConfirmComponent} from "../../delivery/confirm/confirm.component";
import { APP_NAME } from 'app/config/app.config';
import { InfoRating } from 'app/model/info-rating.model';
import { FileManagerServices } from "./../../services/fileManager.services";

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

    panelOpenState = false;

    customCollapsedHeight = '58px';
    customExpandedHeight = '58px';
    messageSend: string;
    // orderId = 16;

    orderDetailRO: OrderDetailRO;
    chatDTO: ChatDTO;

    displayedColumns: string[] = ['content', 'historyDate'];
    displayedColumnsMer: string[] = ['merchandiseCodeCustomer', 'paymentWeight', 'length', 'statusDisplay', 'changeDate'];
    displayedColumnsRec: string[] = ['receiptDate', 'convertedAmount', 'reasionDisplay', 'description'];
    displayedColumnsCom: string[] = ['complainContent', 'complainSettle', 'statusDisplay', 'createdDate'];
    dataChat: OrderChat[] = [];
    lOrderDetail: LOrderDetail[] = [];
    msgs: Message[] = [];

    dataSourceMer: MatTableDataSource<Merchandise>;
    dataSourceRec: MatTableDataSource<Receipt>;
    dataSourceCom: MatTableDataSource<Complain>;
    dataSource: MatTableDataSource<OrderHistory>;

    orderId: number;
    loading: boolean = false;
    APP_NAME = APP_NAME;
    
    infoRating: InfoRating;
    rating: number = null;
    detectWidthLayout: boolean = true
    detectWidthLayoutSm: boolean = true
    refreshingImg = false;

    constructor(
        private _passData: PassDataService,
        private orderDetailService: OrderDetailService,
        public dialog: MatDialog,
        private cdref: ChangeDetectorRef,
        private router: Router, 
        private activeRoute: ActivatedRoute,
        private _shipManager: ShipManagerService, 
        public fileManagerServices: FileManagerServices) {

        if (window.innerWidth <= 800) {
            this.detectWidthLayout = false
        } else {
            this.detectWidthLayout = true
        }
        if (window.innerWidth <= 570) {
          this.detectWidthLayoutSm = false
        } else {
          this.detectWidthLayoutSm = true
        }

        this.dataSource = new MatTableDataSource<OrderHistory>();
        this.dataSourceMer = new MatTableDataSource<Merchandise>();
        this.dataSourceRec = new MatTableDataSource<Receipt>();
        this.dataSourceCom = new MatTableDataSource<Complain>();
        this.orderDetailRO = new OrderDetailRO();
        this.chatDTO = new ChatDTO();

        this.orderId = null;

        this.infoRating = JSON.parse(localStorage.getItem('ratingInfo'))
        if (this.infoRating.exchangeRate)
          this.rating = Number(this.infoRating.exchangeRate)
    }

    @HostListener('window:resize', ['$event'])
    onResize (event) {
      if (window.innerWidth <= 800) {
        this.detectWidthLayout = false
      } else {
        this.detectWidthLayout = true
      }
      if (window.innerWidth <= 570) {
        this.detectWidthLayoutSm = false
      } else {
        this.detectWidthLayoutSm = true
      }
    }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe(res => {
            // console.log(res);
            if(res.orderId) {
                this._passData.loading(false);
                this.orderId = res.orderId;
                this.loadData(this.orderId);
            }  else {
                this.router.navigate(['/ship-manager/orders']);
            }
        });
    }

    loadData(id: number) {
        this.loading = true;
        this.orderDetailService.getOrderDetail(id).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.loading = false;
                    this.orderDetailRO = res.result.data;
                    // this.dataSource = new MatTableDataSource<OrderHistory>(this.orderDetailRO.orderHistory);
                    this.dataSource.data = res.result.data.lsOrderHistory;
                    // this.dataSourceMer = new MatTableDataSource<Merchandise>(this.orderDetailRO.merchandise);
                    this.dataSourceMer.data = res.result.data.lsMerchandise;
                    // this.dataSourceRec = new MatTableDataSource<Receipt>(this.orderDetailRO.receipt);
                    this.dataSourceRec.data = res.result.data.lsReceipt;
                    // this.dataSourceCom = new MatTableDataSource<Complain>(this.orderDetailRO.complain);
                    this.dataSourceCom.data = res.result.data.lsComplain;
                    this.dataChat = res.result.data.lsOrderChat;
                    this.sortByDueDate();
                    this.lOrderDetail = res.result.data.lsOrderDetail;
                } else {
                    this.showMessage(res.result.message, 'danger');
                }
            }).catch(() => {
            this.loading = false;
            this.showMessage('Không thể tải thông tin đơn hàng', 'danger');
        });
    }

    public sortByDueDate(): void {
        this.dataChat.sort((a: OrderChat, b: OrderChat) => {
            return new Date(a.chatTime).getTime() - new Date(b.chatTime).getTime();
        });
    }

    send() {
        if (this.messageSend) {
            this.chatDTO.orderId = this.orderDetailRO.orderData.orderId;
            this.chatDTO.userId = this.orderDetailRO.orderData.userId;
            this.chatDTO.content = this.messageSend;
            this.messageSend = '';
            const ordermessage = new OrderChat();
            ordermessage.content = this.chatDTO.content;
            ordermessage.chatTime = new Date();
            ordermessage.orderId = this.orderDetailRO.orderData.orderId;
            ordermessage.userId = this.orderDetailRO.orderData.userId;
            this.orderDetailService.postChat(this.chatDTO).subscribe(
                (res) => {
                    if(res.result.success) {
                        this.dataChat.push(res.result.data)
                    } else {

                    }
                }, err => {
                    
                }
            );
        }
    }

    paymentOrder() {
        const data = {
            orderIds : [this.orderId],
        };
        this.dialog.open(PaymentOrdersComponent, {
            data: data,
            panelClass: 'payment-order-dialog',
        }).afterClosed().subscribe((res) => {
            if (res) {
                this.showMessage('Thanh toán thành công', 'success');
                this.loadData(this.orderId);
            }
        });
    }

    clear() {
        this.msgs = [];
    }

    showMessage(str: string, type: string) {
        var _self = this;
        _self.msgs = [];
        _self.msgs.push({severity: type, summary: str, detail:''});
        setTimeout(function() {
            _self.clear();
        }, 10000);
    }

    cancel() {
        if (confirm('Bạn có chắc muốn hủy đơn hàng?')) {
            this.loading = true;
            this._shipManager.cancelOrder(this.orderId).subscribe(res => {
                if(res.result.success) {
                    this.showMessage('Hủy đơn hàng thành công', 'success');
                } else {
                    this.showMessage(res.result.message, 'error');
                }
                this.loading = false;
            }, err => {
                this.showMessage('Hủy đơn hàng thất bại', 'error');
                this.loading = false;
            });
        }
    }

    /**
     * Create request delivery
     */
    requestDelivery() {
        const data = {
            orderId : this.orderId,
        };
        // this.dialog.open(ConfirmComponent, {
        //     data: data,
        //     panelClass: 'payment-order-dialog',
        // }).afterClosed().subscribe((res) => {
        //     if (res) {
        //         this.showMessage('Tạo yêu cần giao thành công', 'success');
        //         this.loadData(this.orderId);
        //     }
        // });
    }

    complaint() {
        this.router.navigate(['complaint/complaint-order', this.orderId, this.orderDetailRO.orderData.orderCode ]);
      }

      refreshImageAttachFile() {
        this.refreshingImg = true;
        this.fileManagerServices
            .refreshImageByOrderId(this.orderId)
            .subscribe(
              (resRefreshImage) => {
                if (resRefreshImage && resRefreshImage.result.success) {
                }
                this.refreshingImg = false;
                this.loadData(this.orderId);
              },
              (err) => {
                this.refreshingImg = false;
              }
            );
      }
}
