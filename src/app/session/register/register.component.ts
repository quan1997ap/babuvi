import { UserService } from 'app/services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    Validators,
    FormControl,
} from '@angular/forms';
import { Warehouse } from 'app/model/warehouse.model';
import { User } from 'app/model/user.model';
import { SelectItemGroup, SelectItem } from 'primeng/api'; // truong import
import { Router } from '@angular/router';
@Component({
    selector: 'ms-register-session',
    templateUrl: './register-component.html',
    styleUrls: ['./register-component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
    lstWarehouse: Warehouse[];
    email = new FormControl('', [Validators.required, Validators.email]);
    hidepass = true;
    hidepassreturn = true;
    selectedWarehouse: any;
    emailValue: string;
    phoneValue: string;
    passwordValue: string;
    messages: any[];

    registerData: any = {};

    constructor(
        private userService: UserService,
        private router: Router,) {
    }

    ngOnInit() {
        this.userService.GetListWarehouseVN().toPromise()
            .then((res) => {
                if (res.result.success) {
                    this.lstWarehouse = res.result.data;
                    this.lstWarehouse.forEach(warehouse => {
                        this.optionWarehouse.push({ label: warehouse.name, value: warehouse.warehouseId })
                    })
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }

                console.log(this.lstWarehouse);
            });
    }

    getErrorMessageEmail() {
        return this.email.hasError('required') ? 'Email không được trống' :
            this.email.hasError('email') ? 'Sai định dạng Email' :
                '';
    }
    addNewCustommer() {
        let userData = new User();
        userData.username = this.emailValue;
        userData.password = this.passwordValue;
        userData.phone = this.phoneValue;
        userData.email = this.emailValue;
        userData.WarehouseReceive = this.selectedWarehouse.warehouseId;

        console.log(this.selectedWarehouse);
        console.log(userData);
        this.userService.AddNewCustommer(userData).toPromise()
            .then((res) => {
                if (res.result.success) {
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.showMessage('alert-danger', 'Đăng ký thất bại');
            });
    }
    onClickSave() {
        this.addNewCustommer();
    }

    /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    showMessage(messageClass: string, detail: string): void {
        this.messages = [];
        this.messages.push({ messageClass: messageClass, detail });
        setTimeout(() => {
            this.messages = [];
        }, 3000);
    }

    // Code của trường
    readed: boolean = false;
    selectWarehouse: string;
    optionWarehouse: SelectItem[] = [];
    signUpSuccess: boolean = false;
    thongbao: string;
    thongbaoloi: boolean = false;
    countSubmit: number = 0;
    captcha1:boolean = false;
    /*
    - signup() sẽ kiểm tra các giá trị đăng kí tài khoản trước khi gửi lên server
    - biến countSubmit =0 là trước khi nhấn đăng kí thì sẽ không hiện thông báo lỗi, 
    sau khi nhấn đăng kí sẽ validate form mỗi lần nhấn phím */
    signup(formSignUp) {
        let form = formSignUp.value;
        console.log(formSignUp);
        let userData = new User();
        userData.username = form.acount;
        userData.phone = form.phone;
        userData.password = form.password;
        userData.email = form.email;
        userData.WarehouseReceive = form.WarehouseReceive;
        this.countSubmit++;
        console.log(userData);
        for (let key in form) {
            if (form[key] == "" || form[key] == undefined) {
                console.log(key)
                let status = "";
                switch (key) {
                    case 'acount': status = "Tên đăng nhập không được để trống!"; break;
                    case 'email': status = "Email không được để trống!"; break;
                    case 'password': status = "Mật khẩu không được để trống!"; break;
                    case 'WarehouseReceive': status = "Vui lòng chọn kho nhận hàng!"; break;
                    case 'read': status ="Vui lòng đọc và đồng ý với các Quy định và Chính sách của Babuvi!";break;
                    default: status = "Vui lòng điền đầy đủ thông tin!"; break;
                }
                this.notice(status);
                return;
            }
        };
        if (formSignUp.controls.acount.status != "VALID") {
            this.notice('Tài khoản chỉ bao gồm chữ hoa, chữ thường và số!');
            return;
        };
        if (formSignUp.controls.email.status != "VALID") {
            this.notice('Email không đúng định dạng!');
            return;
        };
        if (formSignUp.controls.password.status != "VALID") {
            this.notice('Mật khẩu dài ít nhất 6 kí tự, bao gồm chữ và số!');
            return;
        };
        if (form.password != form.repassword) {
            this.notice('Mật khẩu nhập lại không khớp!');
            return;
        };
        if (this.captcha1 == false){
            this.notice('Vui lòng gõ mã captcha!');
            return; 
        }

        this.userService.AddNewCustommer(userData).toPromise()
            .then((res) => {
                if (res.result.success) {
                    this.signUpSuccess = true;
                    setTimeout(() => { this.router.navigate(["/authentication/login"]); }, 5000);
                    formSignUp.onReset();
                } else {
                    this.notice(res.result.message);
                }
            })
            .catch(() => {
                this.notice('Đăng ký thất bại');
            });
    }

    notice(notice) {
        this.thongbao = notice;
        this.thongbaoloi = true;
    }

    //handle Key sau lần chọn đanwg kí đầu tiên, mỗi lần keyup sẽ bắt xem còn nội dung nào phải sửa
    handleKeyUp(e, formSignUp) { 
        if (formSignUp.valid) {
            this.thongbaoloi = false;
        }
        if (this.countSubmit > 0) {
            let form = formSignUp.value
            for (let key in form) {
                if (form[key] == "" || form[key] == undefined || form[key] == false) {
                    console.log(key)
                    let status = "";
                    switch (key) {
                        case 'acount': status = "Tên đăng nhập không được để trống!"; break;
                        case 'email': status = "Email không được để trống!"; break;
                        case 'password': status = "Mật khẩu không được để trống!"; break;
                        case 'WarehouseReceive': status = "Vui lòng chọn kho nhận hàng!"; break;
                        case 'read': status ="Vui lòng đọc và đồng ý với các Quy định và Chính sách của Babuvi!";break;
                        default: status = "Vui lòng điền đầy đủ thông tin!"; break;
                    }
                    this.notice(status);
                    return;
                }
            };
            if (formSignUp.controls.email.status != "VALID") {
                this.notice('Email không đúng định dạng!');
                return;
            };
            if (formSignUp.controls.password.status != "VALID") {
                this.notice('Mật khẩu dài ít nhất 6 kí tự, bao gồm chữ và số!');
                return;
            };
            if (form.password != form.repassword) {
                this.notice('Mật khẩu nhập lại không khớp!');
                return;
            };
            if (this.captcha1 == false){
                this.notice('Vui lòng gõ mã captcha!');
                return; 
            }
        }
    };

    showResponse(e){
        console.log(1,e)
        this.captcha1 = true;
        if(this.thongbao == "Vui lòng gõ mã captcha!" && this.captcha1 == true){
            this.thongbaoloi = false;
        }
      }
    showExpire(){
        this.captcha1 = false;
        this.notice('Vui lòng gõ mã captcha!');
    }

    
    newpw:string = 'password';
    renewpw:string = 'password';
    changeType(th){
        switch(th){
            case 0:
                this.newpw = this.newpw == 'text'?'password':'text';
                break;
            case 1:
                this.renewpw = this.renewpw == 'text'?'password':'text';
                break;
        }
    }
    // Hết code của trường
}



