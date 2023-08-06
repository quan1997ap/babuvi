import { Routes } from '@angular/router';
import {ComplaintOrderComponent} from '../complaint/complaint-order/complaint-order.component';
import {HandleComplaintComponent} from '../complaint/handle-complaint/handle-complaint.component';
import {ListComplaintComponent} from '../complaint/list-complaint/list-complaint.component';
import {ListComplaintManagerComponent} from '../complaint/list-complaint-manager/list-complaint-manager.component';
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
        path: 'handle-complaint/:complainId',
        component: HandleComplaintComponent
    },
    {
        path: 'list-complaint',
        component: ListComplaintComponent
    },
    {
        path: 'list-complaint-manager',
        component: ListComplaintManagerComponent
    }
];
