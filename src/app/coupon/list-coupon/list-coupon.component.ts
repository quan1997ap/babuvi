import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-coupon",
  templateUrl: "./list-coupon.component.html",
  styleUrls: ["./list-coupon.component.scss"],
})
export class ListCouponComponent implements OnInit {
  loading = false;
  filterForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      code: ["", Validators.required],
    });
  }

  filterRequest() {
    if (!this.loading) {
    }
  }
}
