import { ServicePackService } from "./../../services/service-pack.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DetailServicePackComponent } from "./../detail-service-pack/detail-service-pack.component";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-list-service-pack",
  templateUrl: "./list-service-pack.component.html",
  styleUrls: ["./list-service-pack.component.scss"],
  providers: [],
})
export class ListServicePackComponent implements OnInit {
  loading = false;
  resServicePacks = [];
  backBtnConfig = {
    backLink: "",
    label: "",
  };
  constructor(
    public dialog: MatDialog,
    public servicePackService: ServicePackService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params && params.backLink) {
        this.backBtnConfig = { backLink: params.backLink, label: params.label };
      }
    });

    this.loading = true;
    this.servicePackService.getLsServicePackByUser(1, 10).subscribe(
      (resServicePack) => {
        if (
          resServicePack &&
          resServicePack.result &&
          resServicePack.result.success
        ) {
          this.resServicePacks = resServicePack.result.data.lsData;
        }
        this.loading = false;
      },
      (error) => {
        this.showMessage("error", "Error", "Có lỗi xảy ra");
        this.loading = false;
      }
    );
  }

  viewDetailServicePack(servicePack) {
    let dialogRef = this.dialog.open(DetailServicePackComponent, {
      height: "90vh",
      width: "90vw",
      maxHeight: "400px",
      maxWidth: "600px",
      data: servicePack,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.paymentSuccess) {
        this.showMessage("success", "Success", "Thanh toán thành công");
      }
    });
  }

  showMessage(type, summary, detail) {
    this.messageService.add({
      severity: type,
      summary: summary,
      detail: detail,
    });
    setTimeout(() => {
      this.messageService.clear();
    }, 4000);
  }

  backTo(url){
    this.router.navigateByUrl(url);
  }
}
