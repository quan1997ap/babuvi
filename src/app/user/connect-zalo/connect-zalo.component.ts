import { Component, OnInit } from '@angular/core';
import { resetComponentState } from '@angular/core/src/render3/state';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-connect-zalo',
  templateUrl: './connect-zalo.component.html',
  styleUrls: ['./connect-zalo.component.scss'],
})

export class ConnectZaloComponent implements OnInit {

    constructor(
      private userService: UserService,
    ) { }

    // Something
    messages = [];
    customerPhone: string = "";
    loading: boolean = false;

    ngOnInit() {
      this.loading = true;
    }

    addZalo() {
      if (this.customerPhone != "") {
        this.loading = true;
        this.userService.comfirmFollowZalo(this.customerPhone).toPromise()
        .then(async res => {
          this.loading = false;
          if (res.result.success) {
            this.showMessage('alert-success', 'Kết nối zalo thành công');
          } else {
            this.showMessage('alert-danger', res.result.message);
          }
        }
        )
        .catch(() => {
          this.loading = false;
          this.showMessage('alert-danger', 'Không kết nối được server');
      })
      }
    };

     /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    showMessage(messageClass: string, detail: string): void {
      // this.messages = [];
      this.messages.push({messageClass: messageClass, detail});
      setTimeout(() => {
          this.messages = [];
      }, 3000);
    }
}