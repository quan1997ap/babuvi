import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { ConfirmationService } from 'primeng/api';
import { UserService } from 'app/services/user.service';

@Component({
   selector: 'ms-forgot-password',
   templateUrl:'./forgot-password-component.html',
   styleUrls: ['./forgot-password-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordComponent {
	
	email: string;
  thongbao: string = "";
  thongbaoloi: boolean = false;
  loading: boolean = false;
  resetSuccess: boolean = false;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private UserService: UserService,
  ) { }

  send() {
    this.router.navigate(['/']);
  }

  resetPass(form) {
    if (this.email == null) {
      this.thongbao = "Vui lòng nhập Email.";
      this.thongbaoloi = true;
      return;
    }

    if (form.controls.email.status != "VALID") {
      this.thongbao ="Email không đúng định dạng!";
      this.thongbaoloi = true;
      return;
    }

    this.confirmationService.confirm({
      key: "resetPass",
      message: 'Chắc chắn muốn lấy lại mật khẩu?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        this.loading = true;
        this.UserService.resetPass(this.email)
          .toPromise().then(data => {
            if (data.result.success == true) {
              this.loading = false;
              this.resetSuccess = true;
              setTimeout(() => {
                this.router.navigate(["/authentication/login"]);
              }, 5000);
              form.onReset();
            }
            else {
              this.thongbao = data.result.message;
              this.thongbaoloi = true;
              this.loading = false;
            }
          })
        this.thongbaoloi = false;
      },
      reject: () => {
        this.thongbaoloi = false;
        this.loading = false;
      }
    });
  }
}



