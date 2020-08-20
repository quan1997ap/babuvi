import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestComponent} from './request/request.component';
import {RouterModule} from '@angular/router';
import {DeliveryRoutes} from './delivery.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MerchandiseServices} from 'app/services/merchandise.services';
import {PaymentOrdersComponent} from '../payment-orders/payment-orders.component';
import {PaymentOrdersModule} from '../payment-orders/payment-orders.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ConfirmComponent } from './confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [RequestComponent, ConfirmComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(DeliveryRoutes),
        FormsModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        PaymentOrdersModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
    ],
    providers: [MerchandiseServices, MerchandiseServices],
    entryComponents: [PaymentOrdersComponent, ConfirmComponent]
})
export class DeliveryModule {
}
