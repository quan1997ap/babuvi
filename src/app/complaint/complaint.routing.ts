import { Routes } from '@angular/router';
import {ComplaintOrderComponent} from '../complaint/complaint-order/complaint-order.component';
import {ListComplaintComponent} from '../complaint/list-complaint/list-complaint.component';
export const ComplaintRoutes: Routes = [
    {
        path: 'complaint-order',
        component: ComplaintOrderComponent
    },
    {
        path: 'complaint-order/:orderId/:orderCode',
        component: ComplaintOrderComponent
    },
    {
        path: 'complaint-order/:complainId',
        component: ComplaintOrderComponent
    },
    {
        path: 'list-complaint',
        component: ListComplaintComponent
    }
];
