// Angular
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
// Components
import { DetailServicePackComponent } from "./detail-service-pack/detail-service-pack.component";
import { ListServicePackComponent } from "./list-service-pack/list-service-pack.component";

// Libs
import { ToastModule } from "primeng/toast";
import { NgxSpinnerModule } from "ngx-spinner";

// Confirm
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";

// Shared
import { ShareCommonModule } from "./../common/share-common.module";

@NgModule({
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    NgxSpinnerModule,
    // shared
    ShareCommonModule,
  ],
  declarations: [DetailServicePackComponent, ListServicePackComponent],
  exports: [
    CommonModule,
    FormsModule,
    // components
    DetailServicePackComponent,
    ListServicePackComponent,
    // libs
    ToastModule,
    NgxSpinnerModule,
    ConfirmDialogModule,
  ],
  entryComponents: [DetailServicePackComponent],
  providers: [ConfirmationService]
})
export class SharedServicePackModule {}
