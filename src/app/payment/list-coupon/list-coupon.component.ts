import { DetailCouponComponent } from "./../detail-coupon/detail-coupon.component";
import { DialogService, DynamicDialogRef } from "primeng/api";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { CouponServices } from "app/services/coupon.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-list-coupon",
  templateUrl: "./list-coupon.component.html",
  styleUrls: ["./list-coupon.component.scss"],
  providers: [DialogService], // resolve close multi dialog
})
export class ListCouponComponent implements OnInit, OnDestroy {
  msgs = [];
  loading = false;
  filterForm: FormGroup;
  coupons = [];
  constructor(
    private fb: FormBuilder,
    private couponServices: CouponServices,
    private dialogServiceLstCoupon: DialogService,
    private dynamicDialogRefLstCoupon: DynamicDialogRef,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getListCoupon();
    this.filterForm = this.fb.group({
      code: ["", Validators.required],
    });
  }

  ngOnDestroy(): void {}

  filterRequest() {
    // 59T6211
    // BERB211
    // PSB5211
    // 0G5Q211
    // 9MW3211
    // WIJW211
    // 5V9U211
    // BF09211
    this.spinner.show();
    this.msgs = [];
    this.couponServices.getCouponByCode(this.filterForm.value.code).subscribe(
      (res) => {
        if (res && res.result) {
          if (res.result.success) {
            this.msgs.push({
              severity: "success",
              summary: "Success",
              detail: "Mã hợp lệ",
            });
            setTimeout(() => {
              this.dynamicDialogRefLstCoupon.close(res.result.data);
            }, 500);
          } else {
            this.msgs.push({
              severity: "error",
              summary: "Error",
              detail: res.result.message,
            });
          }
        }
        this.spinner.hide();
        this.timeOutClearMessage();
      },
      (err) => {
        this.msgs.push({
          severity: "error",
          summary: "Error",
          detail: "Có lỗi xảy ra",
        });
        this.spinner.hide();
        this.timeOutClearMessage();
      }
    );
  }

  getListCoupon() {
    this.msgs = [];
    this.spinner.show();
    this.couponServices.getMyCoupon(1, 1000).subscribe(
      (resCoupons) => {
        if (resCoupons && resCoupons.result && resCoupons.result.success) {
          this.coupons = resCoupons.result.data.lsData.filter((coupon) => {
            if (
              coupon &&
              coupon.quantityRemaining > 0 &&
              coupon.quantityPerUser > 0 &&
              new Date(coupon.endDate).getTime() - new Date().getTime() > 0
            ) {
              return true;
            } else {
              return false;
            }
          });
        }
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        this.msgs.push({
          severity: "error",
          summary: "Error",
          detail: "Có lỗi xảy ra",
        });
        this.timeOutClearMessage();
      }
    );
  }

  timeOutClearMessage() {
    setTimeout(() => {
      this.msgs = [];
    }, 4000);
  }

  showDetailCoupon(event, coupon) {
    if (
      event &&
      event.target.className !== "use-now" &&
      event.target.className !== "text"
    ) {
      const refDetail = this.dialogServiceLstCoupon.open(
        DetailCouponComponent,
        {
          header: "Chi tiết mã khuyến mại",
          style: {
            "max-width": "400px",
            "min-width": "300px",
            "overflow-y": "auto",
          },
          data: Object.assign(coupon, {inUse: false}),
        }
      );
      refDetail.onClose.subscribe((couponSelected) => {
        if (couponSelected) {
          this.dynamicDialogRefLstCoupon.close(couponSelected);
        }
      });
    }
  }

  useCoupon(coupon) {
    this.dynamicDialogRefLstCoupon.close(coupon);
  }
}
