import { Routes } from '@angular/router';
import {AddMerchandiseComponent} from './add/add-merchandise.component';
import {MerchandiseDeliveryComponent} from './delivery/merchandise-delivery.component';
export const MerchandiseRoutes: Routes = [
  {
    path: 'add',
    component: AddMerchandiseComponent
  },
  {
    path: 'delivery',
    component: MerchandiseDeliveryComponent
  },
];
