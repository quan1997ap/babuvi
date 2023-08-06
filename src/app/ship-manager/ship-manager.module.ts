import { NgModule } from '@angular/core';
import { RouterModule, UrlSerializer } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  MatDialogModule,
  MatProgressSpinnerModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipManagerRoutes } from './ship-manager.routing';
import { OrdersComponent } from './orders/orders.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import { OrdersStaffComponent } from './orders-staff/orders-staff.component';
import { OrdersAffiliateComponent } from './orders-affiliate/orders-affiliate.component';
import { ShipManagerService } from 'app/services/ship-manager.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailManagerComponent } from './order-detail-manager/order-detail-manager.component';
import { OrderDetailService } from 'app/services/order-detail.service';
import {PaymentOrdersModule} from '../payment-orders/payment-orders.module';
import {PaymentOrdersComponent} from '../payment-orders/payment-orders.component';
import { ShareCommonModule } from '../common/share-common.module';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { MessagesModule } from 'primeng/primeng';
import { MessageService } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
// import {DeliveryModule} from "../delivery/delivery.module";
import { CommonViewModule } from 'app/common-view/common-view.module';
import { CustomUrlSerializer } from './custom-url-serializer';
import { ConsignmentOrdersComponent } from './consignment-orders/consignment-orders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ShipManagerRoutes),
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
    PaymentOrdersModule,
    ShareCommonModule,
    MessagesModule,
    MatProgressSpinnerModule,
    // DeliveryModule,
    MatPaginatorModule,
    CommonViewModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule
   ],
  declarations: [
    OrdersComponent,
    OrdersManagerComponent,
    OrdersStaffComponent,
    OrdersAffiliateComponent,
    ConsignmentOrdersComponent,
    OrderDetailComponent,
    OrderDetailManagerComponent
  ],
  providers: [
    ShipManagerService,
    OrderDetailService,
    MessageService,
    { provide: UrlSerializer, useClass: CustomUrlSerializer },
  ],
    entryComponents: [PaymentOrdersComponent]
})

export class ShipManagerModule {}
