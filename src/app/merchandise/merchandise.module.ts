import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddMerchandiseComponent} from './add/add-merchandise.component';
import {RouterModule} from '@angular/router';
import {MerchandiseRoutes} from './merchandise.routing';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MerchandiseServices} from 'app/services/merchandise.services';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HistoryDialogComponent } from './add/history-dialog/history-dialog.component';
import { MatDialogModule } from '@angular/material';
import { MerchandiseDeliveryComponent } from './delivery/merchandise-delivery.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {WarehouseExpService} from 'app/services/warehouse-exp.service';
import {PaymentOrdersComponent} from "../payment-orders/payment-orders.component";
import {PaymentOrdersModule} from "../payment-orders/payment-orders.module";
import { PrintBillComponent } from './delivery/print-bill/print-bill.component';
import {NgxPrintModule} from "ngx-print";
import {NgxBarcodeModule} from "ngx-barcode";
import {PrintService} from "app/services/print.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(MerchandiseRoutes),
        NgxDatatableModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        PaymentOrdersModule,
        NgxPrintModule,
        NgxBarcodeModule,
    ],
    declarations: [AddMerchandiseComponent, HistoryDialogComponent, MerchandiseDeliveryComponent, PrintBillComponent],
    providers: [MerchandiseServices, WarehouseExpService, PrintService],
    entryComponents: [HistoryDialogComponent, PaymentOrdersComponent, PrintBillComponent]
})
export class MerchandiseModule {
}
