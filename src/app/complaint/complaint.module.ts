import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
    MatPaginatorModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplaintRoutes } from './complaint.routing';
import { NotifierOptions, NotifierModule } from 'angular-notifier';
import { ShareCommonModule } from '../common/share-common.module';
import {
  MessagesModule
} from 'primeng/primeng';
import { CommonViewModule } from 'app/common-view/common-view.module';

//service
import { MessagesUtilsService } from './../services/messages-utils.service';
import { ComplaintServices } from 'app/services/complaint.services';
import { SystemService } from 'app/services/system.services';
import { OrderService } from 'app/services/order.service';
import { FileManagerServices } from 'app/services/fileManager.services';

//component
import {ComplaintOrderComponent} from '../complaint/complaint-order/complaint-order.component';
import {HandleComplaintComponent} from '../complaint/handle-complaint/handle-complaint.component';
import {ListComplaintComponent} from '../complaint/list-complaint/list-complaint.component';
import {ListComplaintManagerComponent} from '../complaint/list-complaint-manager/list-complaint-manager.component';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { CaptureMerchandiseShareModule } from './../warehouseimp/capture-merchandise-shared.module';

//primeng Service
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DialogService} from 'primeng/api';
//primeng
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComplaintRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    ShareCommonModule,
    MessagesModule,
    CommonViewModule,
    ToastModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    CheckboxModule,
    MatPaginatorModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    CaptureMerchandiseShareModule
   ],
  declarations: [
    ComplaintOrderComponent,
    HandleComplaintComponent,
    ListComplaintComponent,
    ListComplaintManagerComponent
  ],
  providers: [
    MessagesUtilsService,
    MessageService,
    ComplaintServices,
    SystemService,
    ConfirmationService,
    OrderService,
    FileManagerServices,
    DialogService
  ]
})

export class ComplaintModule {}



