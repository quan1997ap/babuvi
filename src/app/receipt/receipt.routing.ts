import { Routes } from '@angular/router';
import {AddNewReceiptComponent} from './addnew-receipt/addnew-receipt.component';
import {ListReceiptComponent} from './list-receipt/list-receipt.component';
export const ReceiptRoutes: Routes = [
    {
        path: 'addnew-receipt',
        component: AddNewReceiptComponent
    },{
        path: 'list-receipt',
        component: ListReceiptComponent
    },
];
