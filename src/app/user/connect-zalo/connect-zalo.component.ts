import { Component, OnInit } from '@angular/core';
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

    customerPhone: string = "";
    loading: boolean = false;

    ngOnInit() {
      this.loading = true;
    }

    addZalo() {
      if (this.customerPhone != "") {
        this.loading = true;
        this.userService.comfirmFollowZalo(this.customerPhone).toPromise().then(async () => {
          this.loading = false;
        }
        )
      }
    };
}