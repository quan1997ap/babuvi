import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddWarehouseImpComponent } from "./add/add-warehouse-imp.component";
import { RouterModule } from "@angular/router";
import { WarehouseImpRoutes } from "./warehouse-imp.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatDialogModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { WebcamModule } from "ngx-webcam";
//primeng service
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
//primeng
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { TooltipModule } from "primeng/tooltip";
//service
import { WarehouseImpService } from "app/services/warehouse-imp.service";
import { SystemService } from "app/services/system.services";
import { UserService } from "app/services/user.service";
import { MerchandiseServices } from "app/services/merchandise.services";
import { CaptureMerchandiseComponent } from "./add/capture-merchandise/capture-merchandise.component";
import { FileManagerServices } from './../services/fileManager.services';
@NgModule({
  declarations: [AddWarehouseImpComponent, CaptureMerchandiseComponent],
  imports: [
    RouterModule.forChild(WarehouseImpRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ConfirmDialogModule,
    ToastModule,
    WebcamModule,
    DynamicDialogModule,
    TooltipModule
  ],
  providers: [
    WarehouseImpService,
    SystemService,
    UserService,
    ConfirmationService,
    MessageService,
    MerchandiseServices,
    FileManagerServices
  ],
  entryComponents: [CaptureMerchandiseComponent],
})
export class WarehouseImpModule {}
