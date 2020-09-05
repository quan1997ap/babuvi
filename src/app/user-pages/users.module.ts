import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/userlist.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UsersRoutes } from './users.routing';

//Primeng service
import {ConfirmationService} from 'primeng/api';

//Primeng
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UsersRoutes),
    MatIconModule,
    FlexLayoutModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    InputTextModule,
    DialogModule
  ],
  declarations: [
    UserProfileComponent,
    UserListComponent,
    ChangePasswordComponent
  ],
  providers: [
    ConfirmationService
  ]
})

export class UsersModule {}
