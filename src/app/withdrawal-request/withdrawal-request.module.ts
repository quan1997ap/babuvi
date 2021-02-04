import { WithdrawalRequestRoutes } from "./withdrawal-request.routing";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareCommonModule } from "../common/share-common.module";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/primeng";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { StepsModule } from "primeng/steps";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { RadioButtonModule } from "primeng/radiobutton";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { MatCurrencyFormatModule } from "mat-currency-format";
import { MessageModule } from "primeng/message";

import { WithdrawalService } from "app/services/withdrawal.service";
import { CartServices } from "./../services/cart.services";

import { EditUserBankComponent } from "./edit-user-bank/edit-user-bank.component";
import { EditWithdrawalRequestComponent } from "./edit-withdrawal-request/edit-withdrawal-request.component";
@NgModule({
  imports: [
    NgxSpinnerModule,
    CommonModule,
    RouterModule.forChild(WithdrawalRequestRoutes),
    FormsModule,
    ReactiveFormsModule,
    ShareCommonModule,
    MessagesModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
    StepsModule,
    DynamicDialogModule,
    RadioButtonModule,
    ConfirmDialogModule,
    MatCurrencyFormatModule,
    MessageModule
  ],
  declarations: [EditUserBankComponent, EditWithdrawalRequestComponent],
  providers: [
    MessageService,
    WithdrawalService,
    ConfirmationService,
    CartServices,
  ],
  entryComponents: [EditUserBankComponent],
})
export class WithdrawalRequestModule {}
