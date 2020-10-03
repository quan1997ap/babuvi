import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestComponent} from './request/request.component';
import {ListRequestComponent } from './list-request/list-request.component';
import {ListRequestManagerComponent } from './list-request-manager/list-request-manager.component';
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
import {ConfirmComponent } from './confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {MessagesModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        RequestComponent,
        ConfirmComponent,
        ListRequestComponent,
        ListRequestManagerComponent,
    ],
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
        InputTextModule,
        DialogModule,
        ConfirmDialogModule,
        TableModule,
        CheckboxModule,
        DropdownModule,
        OverlayPanelModule,
        CalendarModule,
        ToastModule,
        ProgressSpinnerModule,
        MessagesModule,
        ],
    providers: [
        MerchandiseServices,
        ConfirmationService,
        MessageService,
    ],
    entryComponents: [
        PaymentOrdersComponent,
        ConfirmComponent
    ]
})
export class DeliveryModule {
}
