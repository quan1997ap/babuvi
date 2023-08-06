import { MerchandiseServices } from "./../../../services/merchandise.services";
import { MatDialogRef } from "@angular/material";
import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-merge-delivery",
  templateUrl: "./merge-delivery.component.html",
  styleUrls: ["./merge-delivery.component.scss"],
})
export class MergeDeliveryComponent implements OnInit {
  isLoading = false;
  //shipmentForm: FormGroup;
  lsDelivery = [];
  selectedDelivery = [];
  loading = false;
  messages: any[];
  newDeliveryRequest;

  colSelectedTables = [
    { name: "Mã Yêu cầu", id: "deliveryRequestCode" },
    { name: "Địa chỉ", id: "address" },
    { name: "Điện thoại", id: "contactPhone" },

  ];

  constructor(
    public dialogRef: MatDialogRef<MergeDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private merchandiseServices: MerchandiseServices,
    public cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    // this.transporters = this.data.lsTransporter.map((transporter) => ({
    //   label: transporter.name,
    //   value: transporter.transporterId,
    // }));

    this.initForm();
  }

  initForm() {
    /**
     *
       DeliveryRequestId : ParentMerchandise.DeliveryRequestId,
      ParentMerchandiseWarehouseId: ParentMerchandiseWarehouseId,
      ShipmentId:ParentMerchandise.ShipmentId,
      TransporterId: ParentMerchandise.TransporterId,
      TransporterPackageNumber: ParentMerchandise.TransporterPackageNumber,
      CodAmount: ParentMerchandise.CodAmount,
      CouponCode: ParentMerchandise.CouponCode,
      TotalAmount: ParentMerchandise.CouponCode
     */


    // let shipmentId = null;
    // let deliveryRequestId = null;
    // let totalAmount = null;
    // let codAmount = null;
    // let transporterId = null;
    // let parentMerchandiseWarehouseId = null;
    // let transporterPackageNumber = null;


    // if (this.data.ParentMerchandiseWarehouse.merchandiseWarehouseId) {
    //   deliveryRequestId = this.data.deliveryRequest.deliveryRequestId;
    //   parentMerchandiseWarehouseId = this.data.ParentMerchandiseWarehouse.merchandiseWarehouseId;
    //   let shipment = this.data.ParentMerchandiseWarehouse.shipment;

    //   if(shipment){
      
    //     shipmentId = shipment.shipmentId;
    //     totalAmount = shipment.totalAmount;
    //     codAmount = shipment.codAmount;
    //     transporterId = shipment.transporterId;
    //     transporterPackageNumber = shipment.transporterPackageNumber;
    //   } else {
    //     transporterId = this.transporters[0].value;
    //   }
    // }

    // this.shipmentForm = new FormGroup({
    //   ParentMerchandiseWarehouseId: new FormControl( null, Validators.required),
    //   TransporterPackageNumber: new FormControl(null),
    //   TransporterId: new FormControl(null, Validators.required),
    //   DeliveryRequestId: new FormControl(null),
    //   ShipmentId: new FormControl(null),
    //   CodAmount: new FormControl(null),
    //   TotalAmount: new FormControl(null),
    // });

    // this.shipmentForm.patchValue(
    //   {
    //      ParentMerchandiseWarehouseId: parentMerchandiseWarehouseId,
    //      DeliveryRequestId: deliveryRequestId,
    //      TransporterId : transporterId,
    //      TransporterPackageNumber: transporterPackageNumber,
    //      ShipmentId: shipmentId,
    //      CodAmount: codAmount,
    //      TotalAmount: totalAmount
    //    }
    // )

  }

  ngOnInit() {
    if (this.data) {
        this.merchandiseServices.getLsDeliveryRequestNewByUserId(this.data.userId).subscribe(
            (res) => {
              if (res && res.result && res.result.success) {
                this.lsDelivery = res.result.data;
              } else {
                this.showMessage(
                  "error",
                  "Load dữ liệu",
                  "Không thể tải dữ liệu"
                );
              }
              this.isLoading = false;
            },
            (error) => {
              this.isLoading = false;
              this.showMessage("error", "Load dữ liệu", "Không thể tải dữ liệu");
            }
          );
    }
  }

  showMessage(severity, summary, detail) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }


  close() {
    this.dialogRef.close(this.newDeliveryRequest);
  }

  mergeDeliveryRequest() {
    this.spinner.show();
    this.loading = true;
    this.merchandiseServices
      .mergeDeliveryRequest(this.selectedDelivery)
      .toPromise()
      .then((res) => {
        this.loading = false;
        this.spinner.hide();
        if (res.result.success) {
          this.newDeliveryRequest = res.result.data;
           this.showMessage("success","Thành công", "Gộp vận đơn thành công");
        } else {
           this.showMessage("error","Lỗi", res.result.message);
        }
      })
      .catch(() => {
        this.loading = false;
        this.spinner.hide();
        this.showMessage("error", "Cập nhật dữ liệu", "Gộp yêu cầu giao thất bại");
      });
  }

}
