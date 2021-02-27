//payments
import { EditPaymentComponent } from "./edit-payment/edit-payment.component";
import { ListPaymentComponent } from "./list-payment/list-payment.component";
import { Routes } from "@angular/router";

export const PaymentRoutes: Routes = [
  // payments
  {
    path: "",
    component: ListPaymentComponent,
  },
  {
    path: "add",
    component: EditPaymentComponent,
  },
  {
    path: "detail/:id",
    component: EditPaymentComponent,
  }
];
