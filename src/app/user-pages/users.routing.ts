import { Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/userlist.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const UsersRoutes: Routes = [{
  path: '',
  redirectTo: 'basic-cards',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'userprofile',
    component: UserProfileComponent
  }, {
    path: 'userlist',
    component: UserListComponent
  },{
    path: 'changePassword',
    component: ChangePasswordComponent
  },{
    // edit
    path: 'edit-user/:userId',
    component: UserEditComponent,
  },
  {
    // add
    path: 'add-user',
    component: UserEditComponent,
  },
  ]
}];
