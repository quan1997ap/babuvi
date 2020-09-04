import { Routes } from '@angular/router';
import {RequestComponent} from './request/request.component';
import {ListRequestComponent } from './list-request/list-request.component';
export const DeliveryRoutes: Routes = [
    {
        path: 'request',
        component: RequestComponent
    },
    {
        path: 'list-request',
        component: ListRequestComponent
    },
];
