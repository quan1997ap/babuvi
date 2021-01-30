import { CouponRoutes } from './coupon.routing';
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
import { MessageService } from "primeng/api";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { NgxSpinnerModule } from "ngx-spinner";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { DetailCouponComponent } from './detail-coupon/detail-coupon.component';

@NgModule({
  imports: [
    NgxSpinnerModule,
    CommonModule,
    RouterModule.forChild(CouponRoutes),
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
    ToastModule
  ],
  declarations: [ ListCouponComponent, DetailCouponComponent],
  providers: [MessageService, PaymentService],
})
export class CouponModule {}
