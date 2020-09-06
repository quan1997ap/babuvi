import { Routes } from '@angular/router';
import {AddMerchandiseComponent} from './add/add-merchandise.component';
import {MerchandiseDeliveryComponent} from './delivery/merchandise-delivery.component';
import {ListMerchandiseComponent} from './list-merchandise/list-merchandise.component';
export const MerchandiseRoutes: Routes = [
  {
    path: 'add',
    component: AddMerchandiseComponent
  },
  {
    path: 'delivery',
    component: MerchandiseDeliveryComponent
  },
  {
    path: 'list-merchandise',
    component: ListMerchandiseComponent
  },
];
