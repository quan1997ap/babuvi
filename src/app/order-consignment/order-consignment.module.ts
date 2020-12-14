import { ShareCommonModule } from '../common/share-common.module';

// components
import { OrderConsignmentComponent } from './order-consignment/order-consignment.component';
import { ConfigDeliveryAddressComponent } from './config-delivery-address/config-delivery-address.component';
import { CommonViewModule } from './../common-view/common-view.module';

// primeng
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { MatCurrencyFormatModule } from 'mat-currency-format';

// router
import { OrderConsignmentRoutes } from './order-consignment.routing';

// services
import { CartServices } from './../services/cart.services';
import { SystemService } from './../services/system.services';
import { OrderConsignmentService } from './../services/order-consignment.service';
import { MessageService } from 'primeng/api';
import { MessagesUtilsService } from './../services/messages-utils.service';
// angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// material
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatGridListModule,
  MatExpansionModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonViewModule,
    CheckboxModule,
    CommonModule,
    RouterModule.forChild(OrderConsignmentRoutes),
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
    MatSelectModule,
    DropdownModule,
    CalendarModule,
    MatCheckboxModule,
    InputTextareaModule,
    DynamicDialogModule,
    InputTextModule,
    TableModule,
    MatCurrencyFormatModule
  ],
  declarations: [
    OrderConsignmentComponent,
    ConfigDeliveryAddressComponent,
  ],
  providers: [
    OrderConsignmentService,
    MessageService,
    MessageModule,
    CartServices,
    SystemService,
    MessagesUtilsService
  ],
  entryComponents: [
    ConfigDeliveryAddressComponent
  ]
})

export class OrderConsignmentModule { }
