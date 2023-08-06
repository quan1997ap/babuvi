// import { HandelDeliveryComponent } from './handel-delivery/handel-delivery.component';
import { Routes } from '@angular/router';
import {AddWarehouseImpComponent} from './add/add-warehouse-imp.component';

export const WarehouseImpRoutes: Routes = [
  {
    path: 'add',
    component: AddWarehouseImpComponent
  },
  // {
  //   path: 'handel-delivery',
  //   component: HandelDeliveryComponent
  // },
];
