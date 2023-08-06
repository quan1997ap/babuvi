import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
// primeng
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/primeng";

// services
import { ServicePackService } from "./../services/service-pack.service";
import { ServicePackRoutes } from "./service-pack.routing";
// shared
import { ShareCommonModule } from "../common/share-common.module";
import { SharedServicePackModule } from "./shared-service-pack.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ServicePackRoutes),
    FormsModule,
    ReactiveFormsModule,
    ShareCommonModule,
    MessagesModule,
    ButtonModule,
    InputTextModule,
    MatDialogModule,
    SharedServicePackModule,
  ],
  declarations: [],
  providers: [
    MessageService,
    ServicePackService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class ServicePackModule {}
