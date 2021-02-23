import { CouponServices } from 'app/services/coupon.service';
import { DetailCouponComponent } from "./detail-coupon/detail-coupon.component";
import { ListCouponComponent } from "./list-coupon/list-coupon.component";
import { PaymentService } from "./../services/payment.service";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareCommonModule } from "../common/share-common.module";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { MessagesModule } from "primeng/primeng";
import { DialogService, MessageService } from "primeng/api";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { PaymentRoutes } from "./payment.routing";
import { EditPaymentComponent } from "./edit-payment/edit-payment.component";
import { ListPaymentComponent } from "./list-payment/list-payment.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CheckboxModule } from "primeng/checkbox";
import { AccordionModule } from "primeng/accordion";
import { MultiSelectModule } from "primeng/multiselect";
import { NgxMaskModule } from "ngx-mask";
import { DynamicDialogModule } from "primeng/dynamicdialog";

@NgModule({
  imports: [
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
  ],
  declarations: [
    EditPaymentComponent,
    ListPaymentComponent,
    ListCouponComponent,
    DetailCouponComponent,
  ],
  providers: [
    MessageService,
    PaymentService,
    CouponServices,
    DialogService
  ],
  entryComponents: [ListCouponComponent, DetailCouponComponent],
})
export class PaymentModule {}
