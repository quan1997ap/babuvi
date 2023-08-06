// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Components
import { ListCouponComponent } from "./list-coupon/list-coupon.component";
import { DetailCouponComponent } from "./detail-coupon/detail-coupon.component";

// Services
import { DialogService, MessageService } from "primeng/api";
import { CouponServices } from 'app/services/coupon.service';

// Libs
import { NgxSpinnerModule } from "ngx-spinner";
import { MessagesModule } from "primeng/primeng";
import { NgxMaskModule } from "ngx-mask";

// Confirm
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";

// primeng + mat
import { MatDialogModule } from "@angular/material";
import { ToastModule } from "primeng/toast";
import { CheckboxModule } from "primeng/checkbox";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { TooltipModule } from "primeng/tooltip";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { OverlayPanelModule } from "primeng/overlaypanel";

// Shared
import { ShareCommonModule } from "./../common/share-common.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    NgxSpinnerModule,
    MessagesModule,
    NgxMaskModule.forRoot(),
    // primeng
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    CheckboxModule,
    TooltipModule,
    MatDialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    // shared
    ShareCommonModule,
  ],
  declarations: [ListCouponComponent, DetailCouponComponent],
  exports: [
    CommonModule,
    FormsModule,
    // components
    DetailCouponComponent,
    ListCouponComponent,
    // libs
    ToastModule,
    NgxSpinnerModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ListCouponComponent, DetailCouponComponent],
  providers: [ConfirmationService, DialogService, MessageService, CouponServices],
})
export class SharedCouponModule {}
