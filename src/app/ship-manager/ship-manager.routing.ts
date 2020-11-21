import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ConsignmentOrdersComponent } from './consignment-orders/consignment-orders.component';

export const ShipManagerRoutes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  }, {
    path: 'detail-orders',
    component: OrderDetailComponent
  },
  {
    path: 'consignment-orders',
    component: ConsignmentOrdersComponent
  }
];
