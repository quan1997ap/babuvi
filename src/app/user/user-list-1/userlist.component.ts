import { Router } from '@angular/router';
import { User } from 'app/model/user.model';
import { UserService } from '../../services/user.service';
import { PassDataService } from '../../services/pass-data.services';
import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist-component.html',
  styleUrls: ['./userlist-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  msgs = [];
  constructor(
    private userService: UserService,
    private _passData: PassDataService,
    public cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this._passData.loading(true);
    this.userService.getListUserStaff().subscribe(
      resUsers => {
        console.log(resUsers.message );
        if (resUsers.message == "successful") {
          this.userList = resUsers.result.data;
          console.log(this.userList);
          this._passData.loading(false);
        }
      },
      err => {
        this._passData.loading(false);
      }
    )
  }

  toAddForm() {
    this.router.navigate(['/user/add-user' ]);
  }



}



