import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WalletService } from 'app/services/wallet.services';
import {ClientProfile} from 'app/model/client-profile.model';

@Component({
    selector: 'app-client-topup',
    templateUrl: './client-topup.component.html',
    styleUrls: ['./client-topup.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ClientTopupComponent implements OnInit {

    topupCode: string;
    userId;
    account: ClientProfile;
    messages: any[];

    constructor(private walletService: WalletService) {

                 }

    ngOnInit() {
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.account.userId;

        this.walletService.GetTopupCodeByUser(this.userId).toPromise()
        .then((res) => {
            if (res.result.success) {
                this.topupCode = res.result.data;
            } else {
                this.showMessage('alert-danger', res.result.message);
            }
        });
    }

    copyCode() {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.topupCode;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
      }

    /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    showMessage(messageClass: string, detail: string): void {
        this.messages = [];
        this.messages.push({messageClass: messageClass, detail});
        setTimeout(() => {
            this.messages = [];
        }, 3000);
    }
}
