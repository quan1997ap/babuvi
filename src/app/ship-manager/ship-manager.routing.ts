import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ConsignmentOrdersComponent } from './consignment-orders/consignment-orders.component';

export const ShipManagerRoutes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'consignment-orders',
    component: ConsignmentOrdersComponent
  }
];
