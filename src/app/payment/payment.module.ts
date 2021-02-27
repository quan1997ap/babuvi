import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareCommonModule } from "../common/share-common.module";
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
import { MessagesModule } from "primeng/primeng";
import { DialogService, MessageService } from "primeng/api";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
// 3rd libs
import { NgxMaskModule } from "ngx-mask";
import { NgxSpinnerModule } from "ngx-spinner";
// material dialog
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule } from "@angular/material/dialog";
// Confirm
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";

// Components
import { EditPaymentComponent } from "./edit-payment/edit-payment.component";
import { ListPaymentComponent } from "./list-payment/list-payment.component";
import { DetailCouponComponent } from "./detail-coupon/detail-coupon.component";
import { ListCouponComponent } from "./list-coupon/list-coupon.component";
import { ListServicePackComponent } from './../service-pack/list-service-pack/list-service-pack.component';
import { DetailServicePackComponent } from './../service-pack/detail-service-pack/detail-service-pack.component';
// Services
import { CouponServices } from "app/services/coupon.service";
import { PaymentService } from "./../services/payment.service";
import { ServicePackService } from './../services/service-pack.service';

@NgModule({
  imports: [
    ConfirmDialogModule,
    DynamicDialogModule,
    NgxMaskModule.forRoot(),
    NgxSpinnerModule,
    CommonModule,
    RouterModule.forChild(PaymentRoutes),
    FormsModule,
    ReactiveFormsModule,
    ShareCommonModule,
    MessagesModule,
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
    MatDialogModule
  ],
  declarations: [
    EditPaymentComponent,
    ListPaymentComponent,
    ListCouponComponent,
    DetailCouponComponent,
    ListServicePackComponent,
    DetailServicePackComponent 
  ],
  providers: [
    MessageService, PaymentService, CouponServices, DialogService, ConfirmationService, ServicePackService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents: [ListCouponComponent, DetailCouponComponent, DetailServicePackComponent],
})
export class PaymentModule {}
