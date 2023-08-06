import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MerchandiseRoutes} from './merchandise.routing';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPrintModule} from "ngx-print";
import {NgxBarcodeModule} from "ngx-barcode";
import {PrintService} from "app/services/print.service";
import { ShareCommonModule } from '../common/share-common.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
//service
import {WarehouseExpService} from 'app/services/warehouse-exp.service';
import {MerchandiseServices} from 'app/services/merchandise.services';
import { SystemService } from 'app/services/system.services';
import { FileManagerServices } from 'app/services/fileManager.services';
import { AudioService } from "app/common/audio.service";
//component
import {ListMerchandiseComponent} from './list-merchandise/list-merchandise.component';
import {ListMerchandiseManagerComponent} from './list-merchandise-manager/list-merchandise-manager.component';
import {PaymentOrdersComponent} from '../payment-orders/payment-orders.component';
import {PaymentOrdersModule} from '../payment-orders/payment-orders.module';
import { MerchandiseDeliveryComponent } from './delivery/merchandise-delivery.component';
import { HistoryDialogComponent } from './add/history-dialog/history-dialog.component';
import {AddMerchandiseComponent} from './add/add-merchandise.component';
import {UpdateMerchandiseManagerComponent} from './update-manager/update-merchandise-manager.component';
import { PrintBillComponent } from './delivery/print-bill/print-bill.component';
import { CaptureMerchandiseShareModule } from './../warehouseimp/capture-merchandise-shared.module';
import { MerchandiseLocationComponent } from "./merchandise-location/merchandise-location.component";
//primeng service
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService} from 'primeng/api';
//primeng
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { PackingProductsComponent } from "./delivery/packing-products/packing-products.component";
import { MergeDeliveryComponent } from "./delivery/merge-delivery/merge-delivery.component";
import { RadioButtonModule } from "primeng/radiobutton";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ConfigShipmentComponent } from './delivery/config-shipment/config-shipment.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxSpinnerModule } from "ngx-spinner";
import { PackingProductBillComponent } from './delivery/print-bill/packing-product-bill/packing-product-bill.component';
import { DeliveryBillComponent } from './delivery/print-bill/delivery-bill/delivery-bill.component';
import { RequestDeliveryBillComponent } from './delivery/print-bill/request-delivery-bill/request-delivery-bill.component';
import { DeliveryRequestBillComponent } from './delivery/print-bill/delivery-request-bill/delivery-request-bill.component';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
    imports: [
        NgxSpinnerModule,
        NgxMaskModule.forRoot(),
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
        CalendarModule,
        DropdownModule,
        TableModule,
        CheckboxModule,
        ConfirmDialogModule,
        ToastModule,
        ProgressSpinnerModule,
        ShareCommonModule,
        DialogModule,
        MatToolbarModule,
        MatIconModule,
        InputTextModule,
        RadioButtonModule,
        MessagesModule,
        MessageModule,
        MatTooltipModule,
        DynamicDialogModule,
        CaptureMerchandiseShareModule,
        ButtonModule,
        TooltipModule
    ],
    declarations: [
        AddMerchandiseComponent,
        UpdateMerchandiseManagerComponent,
        HistoryDialogComponent,
        MerchandiseDeliveryComponent,
        PrintBillComponent,
        ListMerchandiseComponent,
        ListMerchandiseManagerComponent,
        PackingProductsComponent,
        MergeDeliveryComponent,
        ConfigShipmentComponent,
        PackingProductBillComponent,
        DeliveryBillComponent,
        RequestDeliveryBillComponent,
        DeliveryRequestBillComponent,
        MerchandiseLocationComponent
    ],
    providers: [
        MerchandiseServices,
        WarehouseExpService,
        PrintService,
        ConfirmationService,
        SystemService,
        MessageService,
        DialogService,
        FileManagerServices,
        AudioService
    ],
    entryComponents: [
        HistoryDialogComponent,
        PaymentOrdersComponent,
        PrintBillComponent,
        PackingProductsComponent,
        MergeDeliveryComponent,
        PrintBillComponent,
        ConfigShipmentComponent
    ]
})
export class MerchandiseModule {
}
