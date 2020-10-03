import { Routes } from '@angular/router';
import {RequestComponent} from './request/request.component';
import {ListRequestComponent } from './list-request/list-request.component';
import {ListRequestManagerComponent } from './list-request-manager/list-request-manager.component';
export const DeliveryRoutes: Routes = [
    {
        path: 'request',
        component: RequestComponent
    },
    {
        path: 'list-request',
        component: ListRequestComponent
    },
    {
        path: 'list-request-manager',
        component: ListRequestManagerComponent
    },
];
