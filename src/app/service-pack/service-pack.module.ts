import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/primeng";
import { ToastModule } from "primeng/toast";
import { ShareCommonModule } from "../common/share-common.module";
import { ServicePackService } from "./../services/service-pack.service";
import { DetailServicePackComponent } from "./detail-service-pack/detail-service-pack.component";
import { ListServicePackComponent } from "./list-service-pack/list-service-pack.component";
import { ServicePackRoutes } from "./service-pack.routing";

@NgModule({
  imports: [
    NgxSpinnerModule,
    CommonModule,
    RouterModule.forChild(ServicePackRoutes),
    FormsModule,
    ReactiveFormsModule,
    ShareCommonModule,
    MessagesModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    MatDialogModule
  ],
  entryComponents: [DetailServicePackComponent],
  declarations: [
    DetailServicePackComponent,
    ListServicePackComponent,
  ],
  providers: [MessageService, ServicePackService],
})
export class ServicePackModule {}
