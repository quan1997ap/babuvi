import { Routes } from "@angular/router";
// component
import { EditWithdrawalRequestComponent } from './edit-withdrawal-request/edit-withdrawal-request.component';
import { EditUserBankComponent } from './edit-user-bank/edit-user-bank.component';

export const WithdrawalRequestRoutes: Routes = [
  // payments
  {
    path: "",
    component: EditWithdrawalRequestComponent,
  }
];
