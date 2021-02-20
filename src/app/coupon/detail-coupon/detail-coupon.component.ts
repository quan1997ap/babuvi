import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-coupon',
  templateUrl: './detail-coupon.component.html',
  styleUrls: ['./detail-coupon.component.scss']
})
export class DetailCouponComponent implements OnInit {

  currentCoupon:any;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    console.log(this.config.data)
    if(this.config.data){
      this.currentCoupon = this.config.data
    }
  }

}
