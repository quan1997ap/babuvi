import { ServicePackService } from './../services/service-pack.service';
import { ServicePackRoutes } from './service-pack.routing';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareCommonModule } from "../common/share-common.module";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/primeng";
import { DialogService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastModule } from "primeng/toast";
import { ListServicePackComponent } from './list-service-pack/list-service-pack.component';
import { DetailServicePackComponent } from './detail-service-pack/detail-service-pack.component';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';

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
    DialogModule,
    InputTextModule,
    ToastModule
  ],
  declarations: [DetailServicePackComponent, ListServicePackComponent, DynamicDialogComponent],
  providers: [MessageService, ServicePackService, DialogService],
  entryComponents: [DetailServicePackComponent, DynamicDialogComponent]
})

export class ServicePackModule {}
