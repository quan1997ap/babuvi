import { ConfirmationService, MessageService } from "primeng/api";
import { ServicePackService } from "./../../services/service-pack.service";
import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-detail-service-pack",
  templateUrl: "./detail-service-pack.component.html",
  styleUrls: ["./detail-service-pack.component.scss"],
  providers: [ConfirmationService]
})
export class DetailServicePackComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public servicePack: any,
    public dialogRef: MatDialogRef<DetailServicePackComponent>,
    public servicePackService: ServicePackService,
    private spinner: NgxSpinnerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {}

  paymentServicePack() {
    this.confirmationService.confirm({
      message: "Bạn có muốn thanh toán gói dịch vụ này?",
      accept: () => {
        this.spinner.show();
        this.servicePackService
          .paymentServicePack(this.servicePack.servicePackId)
          .subscribe(
            (resPaymentServicePack) => {
              if (
                resPaymentServicePack &&
                resPaymentServicePack.result &&
                resPaymentServicePack.result.success
              ) {
                this.dialogRef.close({paymentSuccess:true});
              } else {
                this.showMessage("error","Error","Thanh toán không thành công");
              }
              this.spinner.hide();
            },
            (error) => {
              this.showMessage("error","Error","Thanh toán không thành công");
              this.spinner.hide();
            }
          );
      },
    });
  }

  showMessage(type, summary, detail) {
    this.messageService.add({
      severity: type,
      summary: summary,
      detail: detail
    });
    setTimeout(() => {
      this.messageService.clear();
    }, 4000);
  }
}
