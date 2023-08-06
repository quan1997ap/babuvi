import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { CustomValidators } from 'ng2-validation'
import { MatTableDataSource, MatPaginator } from '@angular/material'
import { lsReceiptTopupService } from 'app/services/is-receipt-topup.service'
import { ReceiptTopup } from '../../model/receipt-topup.model'
import * as _ from 'lodash'
import { Control } from 'app/model/control.model'
import { CommonService } from 'app/services/common.service'

@Component({
  selector: 'app-console-card',
  templateUrl: './console-card.component.html',
  styleUrls: ['./console-card.component.scss']
})
export class ConsoleCardComponent implements OnInit {
  displayedColumns = [
    'checked',
    'walletName',
    'receiptId',
    'createdUserName',
    'amount',
    'currencyShortDisplay',
    'status',
    'receiptDate',
    'description',
    'depositUserName'
  ]

  ELEMENT_DATA: header[] = []
  dataSource = new MatTableDataSource<header>(this.ELEMENT_DATA)
  _receiptopup: ReceiptTopup[] = []
  _detroyItemReceiptTopup: ReceiptTopup[] = [];
  _lstButton: Control[] = []
  values: any
  _isDetele: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator

  public constructor (
    private _commonServices: CommonService,
    private _receiptTopup: lsReceiptTopupService
  ) {
    this.values = JSON.parse(localStorage.getItem('userData'))
  }

  ngAfterViewInit () {
    this.getLstAction(this.values.userCode, 'wallet-lstopup')
    this.getReceiptTopup(10, 1)
  }

  getReceiptTopup (perPage: number, page: number) {
    var self = this
    this._receiptTopup.getReceiptTopup(perPage, page).subscribe(res => {
      if(res.result.success) {
        this._receiptopup = res.result.data
  
        _.forEach(res.result.data, function (value, key) {
          self.ELEMENT_DATA.push({
            checked: false,
            walletName: value.walletName,
            receiptId: value.receiptId,
            createdUserName: value.createdUserName,
            amount: value.amount,
            currencyShortDisplay: value.currencyShortDisplay,
            status: self.getReceiptStatus(value.status),
            receiptDate: value.receiptDate,
            description: value.description,
            depositUserName: value.depositUserName
          })
        })
        this.dataSource.data = self.ELEMENT_DATA
      } else {

      }
    }, err => {

    })
  }

  ngOnInit () {}

  getReceiptStatus (id: number): string {
    switch (id) {
      case 1: {
        return 'chờ xác nhận'
      }
      case 2: {
        return 'xác nhận'
      }
      case 3: {
        return 'hủy'
      }
    }
  }

  onChange (event) {
    var _self = this;
    if(event){
      if(_self._detroyItemReceiptTopup.length === 0)
      _self._detroyItemReceiptTopup.push(event);
      else 
        _.forEach(_self._detroyItemReceiptTopup, function(value, key) {
          if(!_.includes(value, event.receiptId)) 
          _self._detroyItemReceiptTopup.push(event);
          else 
            _.remove(_self._detroyItemReceiptTopup, function(item) { 
              return item.receiptId ===  event.receiptId
            });
        });
    }
  }

  destroyReceiptStatus () {
    var _self = this;
    if(_self._detroyItemReceiptTopup){
      _.forEach(_self._detroyItemReceiptTopup, function(value, key) {
        _self._receiptTopup.destroyReceiptTopup(value.receiptId)
          .subscribe(res => {
            if(res.result.success) {
              _self._isDetele.push[value.receiptId];
            } else {

            }
          }, err => {

          })
      });
      this.dataSource.data = _.filter(_self.ELEMENT_DATA, (v) => !_.includes(_self._isDetele, v.receiptId));
      _self._isDetele = [];
    }
  }

  getLstAction (usercode: number, path: string) {
    this._commonServices.getLstButton(usercode, path).subscribe(res => {
      if(res.result.success) {
        this._lstButton = res.result.data
      } else {

      }
    }, err => {

    })
  }

  // 20: thêm mới, 21: sửa, 22: duyệt, 23: hủy, 24: in phiếu thu,
  checkingAction (item: Control) {
    switch (item.controlId) {
      case 20: {
        // thêm
        break
      }
      case 21: {
        // sửa
        break
      }
      case 22: {
        // duyệt
        break
      }
      case 23: {
        // xóa
        this.destroyReceiptStatus();
        break
      }
      case 24: {
        //  in phiếu thu
        break
      }
    }
  }
}

export interface header {
  checked: boolean
  walletName: string
  receiptId: number
  createdUserName: string
  amount: string
  currencyShortDisplay: string
  status: string
  receiptDate: string
  description: string
  depositUserName: string
}
