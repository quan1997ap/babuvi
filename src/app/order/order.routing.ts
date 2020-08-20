import { Routes } from '@angular/router';
import {OrderBuyComponent} from './order-buy/order-buy.component';
import {OrderBuyEditComponent} from './order-buy-edit/order-buy-edit.component';
export const OrderRoutes: Routes = [
    {
        path: '',
        redirectTo: 'order',
        pathMatch: 'full',
    },
    {
        path: '',
        children: [{
            path: 'order-buy',
            component: OrderBuyComponent
        }, {
            path: 'order-buy-edit',
            component: OrderBuyEditComponent
        }]
    }];
