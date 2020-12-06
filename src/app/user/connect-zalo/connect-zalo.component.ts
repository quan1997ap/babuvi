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
    ) {
    }

    // Something
    messages = [];
    customerPhone: string = "";
    loading: boolean = false;
    notConectedZaloClass: string ="invisible";
    conectedZaloClass: string ="invisible";

    ngOnInit() {
        this.loading = true;
        this.userService.checkConnectedZalo().toPromise()
          .then(async res => {
            this.loading = false;
            if (res.result.success) {
                //Nếu dữ liệu là true --> đã connect zalo
                if (res.result.data) {
                    this.notConectedZaloClass = "invisible";
                    this.conectedZaloClass = "visible";
                }
                else {
                  this.notConectedZaloClass = "visible";
                    this.conectedZaloClass = "invisible";
                }
            } else {
              this.showMessage('alert-danger', res.result.message);
            }
          }
          )
          .catch(() => {
            this.loading = false;
            this.showMessage('alert-danger', 'Không kết nối được server');
        })
        this.loadScript('https://sp.zalo.me/plugins/sdk.js');
      }

    //thêm load script zalo trong phần component để khi click menu sẽ hiện luôn nút quan tâm mà không phải load lại
    public loadScript(url: string) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
    }

    notConectedZalo() {
      return this.notConectedZaloClass;
    }

    conectedZalo() {
      return this.conectedZaloClass;
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