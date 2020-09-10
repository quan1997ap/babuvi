/*import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WalletService } from 'app/services/wallet.services';
import { SystemService } from 'app/services/system.services';
import { Wallet } from 'app/model/wallet.model';
import { ApDomain } from 'app/model/apDomain.model';
import { User } from 'app/model/user.model';
import { UserService } from 'app/services/user.service';
import { Topup } from 'app/model/topup.model';
import {ClientProfile} from 'app/model/client-profile.model';

@Component({
    selector: 'app-topup',
    templateUrl: './topup.component.html',
    styleUrls: ['./topup.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class TopupComponent implements OnInit {

    infoUser: User;
    lstWallet: Wallet[];
    lstPaymentType: ApDomain[];
    lstStatus: ApDomain[];
    selectedPaymentType;
    selectedStatus;
    selectedWallet;
    amount: number;
    paymentId: string;
    content: string;
    messages: any[];
    userId;
    account: ClientProfile;

    constructor(private walletService: WalletService
                , private systemService: SystemService
                , private userService: UserService) {

                 }

    ngOnInit() {
        this.infoUser = new User();
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.account.userId;

        this.userService.GetUsersById(this.userId).toPromise()
        .then((res) => {
            if (res.result.success) {
                this.infoUser = res.result.data;
            } else {
                this.showMessage('alert-danger', res.result.message);
            }
        });

        this.walletService.GetListWalletByUser(this.userId).toPromise()
        .then((res) => {
            if (res.result.success) {
                this.lstWallet = res.result.data;
            } else {
                this.showMessage('alert-danger', res.result.message);
            }
        });

        this.systemService.GetPaymentType().toPromise()
        .then((res) => {
            if (res.result.success) {
                this.lstPaymentType = res.result.data;
            } else {
                this.showMessage('alert-danger', res.result.message);
            }
        });

        this.systemService.GetPaymentStatus().toPromise()
        .then((res) => {
            if (res.result.success) {
                this.lstStatus = res.result.data;
            } else {
                this.showMessage('alert-danger', res.result.message);
            }
        });

    }

    saveTopUp() {
        var topup = new Topup();
        topup.WalletId = this.selectedWallet.walletId;
        topup.Amount = this.amount;
        topup.PaymentId = this.paymentId;
        topup.PaymentType = this.selectedPaymentType.code;
        topup.Content = this.content;
        topup.Status = this.selectedStatus.code;

        this.walletService.SaveTopup(topup).toPromise()
            .then((res) => {
                if (res.result.success) {
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.showMessage('alert-danger', 'Nạp tiền thất bại');
            });
    }
    onClickSave() {
        this.saveTopUp();
    }
    
    showMessage(messageClass: string, detail: string): void {
        this.messages = [];
        this.messages.push({messageClass: messageClass, detail});
        setTimeout(() => {
            this.messages = [];
        }, 3000);
    }
}*/
