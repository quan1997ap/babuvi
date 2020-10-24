import { OrderConsignmentComponent } from './order-consignment/order-consignment.component';
import { Routes } from '@angular/router';

export const OrderConsignmentRoutes: Routes = [
  {
    path: 'add',
    component: OrderConsignmentComponent
  },
  {
    path: 'order-detail:orderId',
  }

];
