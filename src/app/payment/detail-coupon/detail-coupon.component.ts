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
  inUse = false; // Nếu đang có mã giảm giá được chọn : Sử dụng ngay => Sử dụng sau
  constructor(public dialogRef: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    if(this.config.data){
      this.currentCoupon = this.config.data;
      // console.log(this.config.data)
      if(this.config.data.inUse){
        this.inUse = true;
      } else {
        this.inUse = false;
      }
    }
  }

  useCurrentCoupon() {
    this.dialogRef.close( Object.assign(this.currentCoupon , { cancelUseCoupon: false} ));
  }

  cancelUseCurrentCoupon(){
    this.dialogRef.close({ cancelUseCoupon: true});
  }
}
