import { ListCouponComponent } from "./../list-coupon/list-coupon.component";
import { DialogService } from "primeng/api";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-coupon",
  templateUrl: "./show-coupon.component.html",
  styleUrls: ["./show-coupon.component.scss"],
})
export class ShowCouponComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  show() {
    const ref = this.dialogService.open(ListCouponComponent, {
      header: "Mã khuyến mại của bạn",
      style: {
        "max-width": "500px",
        "min-width": "300px",
        "overflow-y": "auto",
      },
    });
  }
}
