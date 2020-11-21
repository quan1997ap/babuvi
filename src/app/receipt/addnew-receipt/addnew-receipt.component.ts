import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SystemService } from 'app/services/system.services';
import { ReceiptService } from 'app/services/receipt.services';
import { WalletService } from 'app/services/wallet.services';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-addnew-receipt',
  templateUrl: './addnew-receipt.component.html',
  styleUrls: ['./addnew-receipt.component.scss'],
  providers: [
    SystemService,
    ReceiptService,
    WalletService
  ]
})
export class AddNewReceiptComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private systemService: SystemService,
    private receiptService: ReceiptService,
    private walletService: WalletService,
    private messageService: MessageService
  ) { }

  loading: boolean = false;
  dropdownKieuBienLai: any = [];
  dropdownLydo: any = [];
  dropdownPttt: any = [];
  pickedWallet1: any = { label: "", value: "" };
  pickedWallet2: any = { label: "", value: "" };
  SoTienNhap:any;
  ngOnInit() {
    //load dữ liệu cho 3 dropdown kiểu biên lai, lý do và phương thức thanh toán
    this.loadDataForDropdown()

  }

  loadDataForDropdown() {
    // Kiểu biên lai
    this.systemService.GetReceiptType().toPromise().then(data => {
      if (data.result.success) {
        console.log('kieubielai', data)
        let data1 = [];
        data1 = data.result.data;
        data1.forEach(e => this.dropdownKieuBienLai.push({ label: e.displayValue, value: e.value }))
      } else {
        this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })
    //Lý do
    this.systemService.GetReasion().toPromise().then(data => {
      if (data.result.success) {
        console.log('lydo', data)
        let data1 = [];
        data1 = data.result.data;
        data1.forEach(e => this.dropdownLydo.push({ label: e.displayValue, value: e.value }))
      } else {
        this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })
    //Phương thức thanh toán
    this.systemService.GetPaymentType().toPromise().then(data => {
      if (data.result.success) {
        console.log('tt', data)
        let data1 = [];
        data1 = data.result.data;
        data1.forEach(e => this.dropdownPttt.push({ label: e.displayValue, value: e.value }))
      } else {
        this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })
  }

  saveFormBL(form) {
    if (form.invalid) {
      this.messageService.add({ key: 'thembienlai', severity: 'warn', summary: 'Thông báo', detail: 'Vui lòng nhập đầy đủ thông tin!' });
      return;
    }
    let formValue = form.value;
    formValue.ReceiptDate = formatDate(formValue.ReceiptDate, 'yyyy-MM-ddTHH:mm:ss.SSS', 'en-US');
    formValue.WalletSource = this.pickedWallet1.value;
    formValue.WalletDestination = this.pickedWallet2.value;
    delete formValue.mabienlai;
    delete formValue.sobienlai;
    this.confirmationService.confirm({
      key: "thembienlai",
      header: "Xác nhận",
      message: 'Thêm biên lai mới?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        this.loading = true;
        console.log(form.value)
        this.receiptService.addReceipt(formValue).toPromise().then(data => {
          console.log(data)
          if (data.result.success) {
            form.onReset();
            this.SoTienNhap = undefined
            this.loading = false;
            this.messageService.add({ key: 'thembienlai', severity: 'success', summary: 'Thông báo', detail: 'Tạo biên lai thành công!' });
          } else {
            this.loading = false;
            this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: data.result.message });
          }
        }).catch(err=> {
          this.loading = false;
          this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: 'Đã xảy ra lỗi!' });
        })
      }
    })
  }

  nameWallet: string = "";
  listWallet: any = [];
  msg1: string = "(Vui lòng nhập mã ví)";
  nameWallet2: string = "";
  listWallet2: any = [];
  msg2: string = "(Vui lòng nhập mã ví)";
  keyUpFindHandle(e, id) {
    if (e.keyCode == 13) {
      this.loading = true;
      switch (id) {
        case 1:
          this.walletService.searchWallet(this.nameWallet).toPromise().then(data => {
            if (data.result.success) {
              /*Search ví theo mã ví, không có kết quả thì truyền vào biến msg1, có kết quả thì truyền vào biến 
              listWallet gồm label và value*/
              let dulieu: any = [];
              dulieu = data;
              this.listWallet = [];
              if (dulieu.result.data.length == 0) { this.msg1 = "(Không có kết quả)" }
              dulieu.result.data.forEach(e => this.listWallet.push({ label: `${e.walletName} - ${e.walletCode}`, value: e.walletId }))
              this.loading = false;
            } else {
              this.loading = false;
              this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: data.result.message });
            }
          });
          break;
        case 2:
          this.walletService.searchWallet(this.nameWallet2).toPromise().then(data => {
            if (data.result.success) {
              /*Search ví theo mã ví, không có kết quả thì truyền vào biến msg1, có kết quả thì truyền vào biến 
              listWallet gồm label và value*/
              let dulieu: any = [];
              dulieu = data;
              this.listWallet2 = [];
              if (dulieu.result.data.length == 0) { this.msg2 = "(Không có kết quả)" }
              dulieu.result.data.forEach(e => this.listWallet2.push({ label: `${e.walletName} - ${e.walletCode}`, value: e.walletId }))
              console.log(data)
              this.loading = false;
            } else {
              this.loading = false;
              this.messageService.add({ key: 'thembienlai', severity: 'error', summary: 'Thông báo', detail: data.result.message });
            }
          });
          break;
      }
    }

    if (this.nameWallet == "") { this.msg1 = "(Vui lòng nhập mã ví)" }
    if (this.nameWallet2 == "") { this.msg2 = "(Vui lòng nhập mã ví)" }
  }

  showViNguon(panel, e) {
    panel.show(e);
    setTimeout(() => {
      document.getElementById("namewallet").focus()
    }, 250);
  }
  showViDich(panel, e) {
    panel.show(e);
    setTimeout(() => {
      document.getElementById("namewallet2").focus()
    }, 250);
  }
  
  ClearWallet(id) {
    switch (id) {
      case 1:
        this.pickedWallet1 = { label: "", value: "" }; break;
      case 2:
        this.pickedWallet2 = { label: "", value: "" }; break;
    }
  }

  money_format(sotien: number, kihieu, vitri) {
    let nStr = sotien==undefined?'':sotien.toString();
    let kq: string = "";
    if (sotien == undefined){ return kq}
      nStr += "";
      let x = nStr.split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? "," + x[1] : "";
      let rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "." + "$2");
      }
      kq = x1 + x2 + kihieu;
      switch (vitri) {
        case '1':
          kq = x1 + x2 + ' ' + kihieu;
          break;
        case '2':
          kq = kihieu + ' ' + x1 + x2;
      }
    
    return kq;
  }
}

