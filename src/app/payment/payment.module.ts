import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PaymentRoutes } from "./payment.routing";
// primeng
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CheckboxModule } from "primeng/checkbox";
import { AccordionModule } from "primeng/accordion";
import { MultiSelectModule } from "primeng/multiselect";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { TooltipModule } from "primeng/tooltip";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { OverlayPanelModule } from "primeng/overlaypanel";

// 3rd libs
import { NgxSpinnerModule } from "ngx-spinner";

// material dialog
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule } from "@angular/material/dialog";

// Components
import { EditPaymentComponent } from "./edit-payment/edit-payment.component";
import { ListPaymentComponent } from "./list-payment/list-payment.component";

// Services
import { PaymentService } from "./../services/payment.service";
import { ServicePackService } from "./../services/service-pack.service";
import { FileManagerServices } from './../services/fileManager.services';

// shared
import { SharedServicePackModule } from './../service-pack/shared-service-pack.module';
import { SharedCouponModule } from './shared-coupon.module';
import { ShareCommonModule } from "../common/share-common.module";

@NgModule({
  imports: [
    OverlayPanelModule,
    DynamicDialogModule,
    NgxSpinnerModule,
    CommonModule,
    RouterModule.forChild(PaymentRoutes),
    ShareCommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    ToastModule,
    CheckboxModule,
    AccordionModule,
    MultiSelectModule,
    TooltipModule,
    MatDialogModule,
    SharedServicePackModule,
    SharedCouponModule
  ],
  declarations: [
    EditPaymentComponent,
    ListPaymentComponent
  ],
  providers: [
    PaymentService,
    ServicePackService,
    FileManagerServices,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ]
})
export class PaymentModule {}
