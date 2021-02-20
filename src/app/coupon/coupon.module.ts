import { CouponRoutes } from "./coupon.routing";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareCommonModule } from "../common/share-common.module";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/primeng";
import { DialogService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastModule } from "primeng/toast";
import { ListCouponComponent } from "./list-coupon/list-coupon.component";
import { DetailCouponComponent } from "./detail-coupon/detail-coupon.component";
import { ShowCouponComponent } from "./show-coupon/show-coupon.component";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { CouponServices } from "app/services/coupon.service";

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
    ToastModule,
    DynamicDialogModule
  ],
  declarations: [
    ListCouponComponent,
    DetailCouponComponent,
    ShowCouponComponent,
  ],
  providers: [MessageService, CouponServices, DialogService],
  entryComponents: [ListCouponComponent, DetailCouponComponent],
})
export class CouponModule {}
