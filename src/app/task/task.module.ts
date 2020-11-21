import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatGridListModule,
  MatExpansionModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatToolbarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareCommonModule } from '../common/share-common.module';
import { TaskRoutes } from './task.routing';
import {
  MessagesModule
} from 'primeng/primeng';
import { MessageService } from 'primeng/api';
import { CommonViewModule } from 'app/common-view/common-view.module';
//componet
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
//services
import { TaskServices } from 'app/services/task.services';
//Prime module
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TaskRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    ShareCommonModule,
    MessagesModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CommonViewModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    TableModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    ToastModule,
    OverlayPanelModule,
    TooltipModule,
    DialogModule
   ],
  declarations: [
    ListTaskComponent,
    TaskDetailComponent
  ],
  providers: [
    MessageService,
    TaskServices,
    ConfirmationService
  ],
    entryComponents: [
    ]
})

export class TaskModule {}
