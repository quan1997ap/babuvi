import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import { OrdersStaffComponent } from './orders-staff/orders-staff.component';
import { OrdersAffiliateComponent } from './orders-affiliate/orders-affiliate.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailManagerComponent } from './order-detail-manager/order-detail-manager.component';
import { ConsignmentOrdersComponent } from './consignment-orders/consignment-orders.component';

export const ShipManagerRoutes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  }, {
    path: 'orders-manager',
    component: OrdersManagerComponent
  }, {
    path: 'orders-staff',
    component: OrdersStaffComponent
  },  {
    path: 'orders-affiliate',
    component: OrdersAffiliateComponent
  }, {
    path: 'detail-orders',
    component: OrderDetailComponent
  },{
    path: 'detail-orders-manager',
    component: OrderDetailManagerComponent
  },
  {
    path: 'consignment-orders',
    component: ConsignmentOrdersComponent
  }
];
