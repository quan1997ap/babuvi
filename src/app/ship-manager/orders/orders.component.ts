import {AfterViewInit, Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {ShipManagerService} from 'app/services/ship-manager.service';
import {ClientProfile} from 'app/model/client-profile.model';
import {ShipOrders} from 'app/model/ship-orders.model';
import {MatDialog, MatTableDataSource, MatPaginator} from '@angular/material';
import {Router, ActivatedRoute, NavigationStart} from '@angular/router';
import {PaymentOrdersComponent} from '../../payment-orders/payment-orders.component';
import { PassDataService } from 'app/services/pass-data.services';
import {MessageService} from 'primeng/components/common/api';
import {Message} from 'primeng/api';
import { ConfirmDialogModel } from 'app/model/confirm-dialog.model';
import { ConfirmDialogComponent } from 'app/common-view/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  ELEMENT_DATA: ShipOrders[] = [];
  @ViewChild('paginator') paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<ShipOrders>;
  account: ClientProfile;
  _shipOrders: ShipOrders[];
  msgs: Message[] = [];

  dataCount: number;
  pageSize: number;
  pageIndex: number = 1;

  constructor(
              private route: ActivatedRoute,
              private _passData: PassDataService,
              private _shipManager: ShipManagerService,
              private router: Router,
              public dialog: MatDialog) {
                this._passData.loading(true);
                this.route.queryParams.subscribe(params => {
                  if (params['pageIndex']) {
                    this.pageIndex = params['pageIndex'];
                  }
                });
                this.router.events
                    .subscribe((event: NavigationStart) => {
                      if (['popstate', 'imperative'].includes(event.navigationTrigger)) {
                        this.pageIndex = Number(new URLSearchParams(event.url.split('?')[1]).get('pageIndex')) ?
                            Number(new URLSearchParams(event.url.split('?')[1]).get('pageIndex')) : 1;
                        this.getDataFromServer();
                      }
                    });
              }
  detectWidthLayout: boolean = true;
  detectWidthLayoutSm: boolean = true;
  ngOnInit() {

    if (window.innerWidth <= 800) {
      this.detectWidthLayout = false
    } else {
      this.detectWidthLayout = true
    }

    if (window.innerWidth <= 800) {
      this.detectWidthLayoutSm = false
    } else {
      this.detectWidthLayoutSm = true
    }

    this.account = JSON.parse(localStorage.getItem('userData'));
    // this._shipOrders = new ShipOrders();
    this._shipOrders = [];
    this.dataSource = new MatTableDataSource<ShipOrders>();
    this.getDataFromServer();
  }


  @HostListener('window:resize', ['$event'])
  onResize (event) {
    if (window.innerWidth <= 800) {
      this.detectWidthLayout = false
    } else {
      this.detectWidthLayout = true
    }
    if (window.innerWidth <= 500) {
      this.detectWidthLayoutSm = false
    } else {
      this.detectWidthLayoutSm = true
    }
  }

  /**
   * Set page index when user click to paginator
   * @param event
   */
  detectPage(event: any) {
    this.pageIndex = event.pageIndex + 1;
  }
  
  /**
   * Routing page index
   * @param event
   */
  pageEvent(event) {
    this.detectPage(event);
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        pageIndex: this.pageIndex
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
  }

  /**
   * Get data from server with page index
   */
  getDataFromServer() {
    this._passData.loading(true);
    this._shipManager.getAllOrders(this.account.userId, this.pageIndex).subscribe(res => {
      if(res.result.success) {
        const dataItem = res.result;
        // page
        this.dataCount = dataItem.dataCount;
        this.pageIndex = dataItem.pageIndex;
        // data
        this._shipOrders = res.result.data;
        this.dataSource.data = res.result.data;
        this.paginator.pageIndex = this.pageIndex - 1;

      } else {
        // this.showMessage('Hủy đơn hàng thành công', 'success');
      }
      this._passData.loading(false);
    }, error => {
      this._passData.loading(false);
    });
  }

  redirect(data: ShipOrders) {
    this._passData.loading(true);
    this._passData.setOrders(data);
    this.router.navigate(['ship-manager/detail-orders/'], { queryParams: { orderId: data.orderId }});
  }

  /**
   * Payment order
   */
  paymentOrders(id) {
    const data = {
      orderIds :  [id],
    };
    this.dialog.open(PaymentOrdersComponent, {
      data: data,
      panelClass: 'payment-order-dialog',
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.showMessage('Thanh toán thành công', 'success');
        this.getDataFromServer();
      }
    });
  }

  cancelOrder(item: any, inx: number) {
    const message = 'Bạn có muốn Hủy'
      const dialogData = new ConfirmDialogModel('Xóa', message)
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: dialogData,
        panelClass: 'confirm-dialog'
      });
      dialogRef.afterClosed().subscribe(
        dialogresult => {
          this._passData.loading(true);
          if (dialogresult) {
            this._shipManager.cancelOrder(item.orderId).subscribe(res => {
              if(res.result.success) {
                this.showMessage('Hủy đơn hàng thành công', 'success');
                this._shipOrders[inx] = res.result.data;
              } else {
                this.showMessage(res.result.message, 'error');
              }
            }, err => {
              this.showMessage('Hủy đơn hàng thất bại', 'error');
            });
          }
          this._passData.loading(false);
        },
        error => {
          this.showMessage('Hủy đơn hàng thất bại', 'error');
          this._passData.loading(false);
        }
      )
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
}
