import { Routes } from '@angular/router';
import {OrderBuyComponent} from './order-buy/order-buy.component';
import {OrderBuyEditComponent} from './order-buy-edit/order-buy-edit.component';
import {OrderBuyReworkComponent} from './order-buy-rework/order-buy-rework.component';
import {OrderFinishComponent} from './order-finish/order-finish.component';
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
        }, {
            path: 'order-buy-rework',
            component: OrderBuyReworkComponent
        }, {
            path: 'order-finish',
            component: OrderFinishComponent
        }
    ]
    }];
