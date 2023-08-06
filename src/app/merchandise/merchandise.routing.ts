import { Routes } from '@angular/router';
import {AddMerchandiseComponent} from './add/add-merchandise.component';
import {UpdateMerchandiseManagerComponent} from './update-manager/update-merchandise-manager.component';
import {MerchandiseDeliveryComponent} from './delivery/merchandise-delivery.component';
import {ListMerchandiseComponent} from './list-merchandise/list-merchandise.component';
import {ListMerchandiseManagerComponent} from './list-merchandise-manager/list-merchandise-manager.component';
import { MerchandiseLocationComponent } from "./merchandise-location/merchandise-location.component";
export const MerchandiseRoutes: Routes = [
  {
    path: 'add',
    component: AddMerchandiseComponent
  },
  {
    path: 'update-manager',
    component: UpdateMerchandiseManagerComponent
  },
  {
    path: 'delivery',
    component: MerchandiseDeliveryComponent
  },
  {
    path: 'list-merchandise',
    component: ListMerchandiseComponent
  },
  {
    path: 'list-merchandise-manager',
    component: ListMerchandiseManagerComponent
  },
  {
    path: "location",
    component: MerchandiseLocationComponent,
  },
];
