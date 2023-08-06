import { Component, HostListener } from '@angular/core';
import { ClientProfile } from 'app/model/client-profile.model';
import { WalletByUserId } from 'app/model/wallet-by-userid.model';
import { TransactionManager } from 'app/model/transaction-manager.model';
import { CommonService } from 'app/services/common.service';
import * as _ from 'lodash';
import { WalletService } from 'app/services/wallet.services';
import { SystemService } from 'app/services/system.services';
import { searchTransactionModel } from 'app/model/search-transaction.model';
import { TypeTransactionModel } from 'app/model/type-transaction.model';
import { Message } from 'primeng/api';
import { PassDataService } from 'app/services/pass-data.services';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {
  
  displayedColumns = ['TotalAmount', 'BlockedAmount', 'AvailableAmount'];
  private account: ClientProfile;
  lstWallet: WalletByUserId[] = [];
  clientProfile: ClientProfile;
  walletId: number;
  lstTransaction: TransactionManager[] = [];
  findWallet: WalletByUserId;
  typeTransactionId: string;
  msgs: Message[] = [];

  dataCount: number;
  pageSize: number;
  pageIndex: number;
  itemTransaction: TypeTransactionModel[];
  itemSearch: searchTransactionModel;
  findItemTransaction: TypeTransactionModel;
  transactionCode: string = null;
  productCode: string = null;
  startDate: Date;
  endDate: Date;
  loading: boolean = true;
  detectWidthLayout: boolean = true;
  detectWidthLayoutSM: boolean = true;
  pageEvent: void;

  constructor(
    private _passData: PassDataService,
    private _wallet: WalletService,
    private _system: SystemService,
    private _commonServices: CommonService) {
      this.pageIndex = 1;
    }

  ngOnInit() {
    if (window.innerWidth <= 576) {
      this.detectWidthLayout = false
    } else {
      this.detectWidthLayout = true
    }
    if (window.innerWidth <= 630) {
      this.detectWidthLayoutSM = false
    } else {
      this.detectWidthLayoutSM = true
    }
    this.account = JSON.parse(localStorage.getItem("userData"));
    this.clientProfile = new ClientProfile();
    this.findWallet = new WalletByUserId();
    this.itemSearch = new searchTransactionModel();
    this.itemTransaction = [];
    this.typeTransactionId = "";
    this.findItemTransaction = new TypeTransactionModel();
  }
  ngAfterViewInit() {
    this.getAccountUser();
    this.getLsWallet(true);
    this.getType();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth <= 576) {
      this.detectWidthLayout = false;
    } else {
      this.detectWidthLayout = true;
    }
    if (window.innerWidth <= 630) {
      this.detectWidthLayoutSM = false;
    } else {
      this.detectWidthLayoutSM = true;
    }
  }

  getAccountUser(){
    this._commonServices.getInfoUser(this.account.userId).subscribe( res => {
      if(res.result.success) {
        this.clientProfile = res['result'].data;
      } else {

      }
    }, err => {

    });
  }

  changeWallet(event: any) {
    this._passData.loading(true);
    this._commonServices.getLsWallet().subscribe( res => {
      if(res.result.success) {
        this._passData.loading(false);
        this.lstWallet = res['result'].data;
        const data  = _.filter(this.lstWallet, o => String(o.walletId) === String(event));
        if(data) {
          this.findWallet = data[0];
          this.itemSearch.WalletId = Number(this.findWallet.walletId);
          this.getWalletTransaction(15, 1, this.itemSearch);
        }
      } else {
        this._passData.loading(false);
      }
    }, err => {
      this._passData.loading(false);
    });
  }

  getLsWallet(detect: boolean){
    var self = this;
    this._passData.loading(true);
    self._commonServices.getLsWallet().subscribe( res => {
      if(res.result.success) {
        this.lstWallet = res['result'].data;
        this.lstWallet.map(rs => {
          if (detect && rs.isDefault === '1') {
            self.walletId = rs.walletId;
            self.findWallet = rs;
            return true;
          } 
          // else if(!detect && rs.walletId === id) {
          //   self.walletId = rs.walletId;
          //   self.findWallet = rs;
          //   return true;
          // }
        });
        this.itemSearch.WalletId = self.walletId;
        this.getWalletTransaction(15, this.pageIndex, this.itemSearch);
      } else {
        this._passData.loading(false);
      }
    })
  }

  public getWalletTransaction(perPage: number, page: number, item: searchTransactionModel) {
    this.lstTransaction = [];
    this._passData.loading(true);
    this._wallet.getWalletTransaction(perPage, page, item).subscribe(res => {
      if(res.result.success) {
        const dataItem = res.result;
        this.lstTransaction = dataItem.data.lsData;
        this.dataCount = dataItem.data.dataCount;
      } else {

      }
      this._passData.loading(false);
    }, err => {
      this._passData.loading(false);
    })
  }

  detectPage(event: any) {
    const lastPage = Math.floor(event.length/event.pageSize);
    if (event.previousPageIndex > event.pageIndex) {
      this.pageIndex = event.pageIndex === 0 ? 1 : this.pageIndex-1;
    } else {
      this.pageIndex = event.pageIndex === lastPage ? lastPage+1 : this.pageIndex+1;
    }
  }

  getServerData(event) {
    this.searchData();
    this.detectPage(event);
    this.getWalletTransaction(15, this.pageIndex, this.itemSearch);
  }

  searchData() {
    this.itemSearch.WalletTransactionCode = this.transactionCode ? this.transactionCode : null;
    this.itemSearch.WalletTransactionType = this.findItemTransaction ? this.findItemTransaction.code :
            this.itemTransaction && this.itemTransaction.length === 0 || !this.itemTransaction ? null : this.findItemTransaction[0].code ;
    this.itemSearch.Content = this.productCode ? this.productCode : null;
    this.itemSearch.StartDate = this.startDate ? new Date(this.startDate) : null;
    this.itemSearch.EndDate = this.endDate ? new Date(this.endDate) : null;
  }

  onSChange(event) {
    this.startDate = event;
  }

  onEChange(event) {
    this.endDate = event;
  }

  searchTransaction() {
    this.searchData();
    this.getWalletTransaction(15, 1, this.itemSearch);
  }

  changeType(value: any) {
    if(String(value) !== "0") {
      const data  = _.filter(this.itemTransaction, function(o) { return String(o.value) === String(value) });
      if(data) {
        this.findItemTransaction = data[0];
      }
    } else {
      this.findItemTransaction = new TypeTransactionModel();
    }
  }

  public getType() {
    const allItem = new TypeTransactionModel();
    allItem.apDomainId = 0;
    allItem.code = "0";
    allItem.displayValue = "Chọn  loại giao dịch";
    allItem.ord = null;
    allItem.shortDisplay = null;
    allItem.status = null;
    allItem.type = null;
    allItem.value = "0";
    this.itemTransaction = [];
    this._system.getTypeCustomer().subscribe(res => {
      this.itemTransaction = res.result.data;
      this.itemTransaction.push(allItem);
      this.itemTransaction = _.sortBy(this.itemTransaction, [function(o) { return o.value; }]);
    });
  }
	
}




