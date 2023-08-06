import { CaptureMerchandiseShareModule } from './capture-merchandise-shared.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddWarehouseImpComponent } from "./add/add-warehouse-imp.component";
import { RouterModule } from "@angular/router";
import { WarehouseImpRoutes } from "./warehouse-imp.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatDialogModule } from "@angular/material";

//primeng service
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
//primeng
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { TooltipModule } from "primeng/tooltip";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { PaginatorModule } from "primeng/paginator";
// Other
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxPrintModule } from "ngx-print";
//service
import { WarehouseImpService } from "app/services/warehouse-imp.service";
import { SystemService } from "app/services/system.services";
import { UserService } from "app/services/user.service";
import { MerchandiseServices } from "app/services/merchandise.services";
import { FileManagerServices } from "./../services/fileManager.services";
// import { HandelDeliveryComponent } from "./handel-delivery/handel-delivery.component";

// component

@NgModule({
  declarations: [
    AddWarehouseImpComponent,
    // HandelDeliveryComponent,
  ],
  imports: [
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    RouterModule.forChild(WarehouseImpRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatDialogModule,
    ConfirmDialogModule,
    ToastModule,
    DynamicDialogModule,
    TooltipModule,
    PaginatorModule,
    NgxPrintModule,
    NgxBarcodeModule,
    CaptureMerchandiseShareModule
  ],
  providers: [
    WarehouseImpService,
    SystemService,
    UserService,
    ConfirmationService,
    MessageService,
    MerchandiseServices,
    FileManagerServices,
  ],
  entryComponents: [],
})
export class WarehouseImpModule {}
