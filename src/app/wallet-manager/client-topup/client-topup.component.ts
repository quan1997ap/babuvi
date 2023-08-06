import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WalletService } from 'app/services/wallet.services';
import {ClientProfile} from 'app/model/client-profile.model';
import {MessageService } from "primeng/api";
import { ClipboardService } from "ngx-clipboard";

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

    constructor(
        private walletService: WalletService,
        private messageService: MessageService,
        private _clipboardService: ClipboardService,
        ) {}

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

      copy() {
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: "Copy mã thành công",
        });
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
