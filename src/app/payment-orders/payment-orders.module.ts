import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentOrdersComponent} from './payment-orders.component';
import {MatDialogModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderService} from 'app/services/order.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [PaymentOrdersComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatButtonModule,
    ],
    providers: [OrderService],
})
export class PaymentOrdersModule {
}
