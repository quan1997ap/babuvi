import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './services/common/AuthGuard';
import { AuthChildGuard } from './services/common/AuthChildGuard';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'authentication',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [
    // {
    //     path: 'withdrawal-request',
    //     canActivate: [AuthGuard],
    //     loadChildren: './withdrawal-request/withdrawal-request.module#WithdrawalRequestModule'
    // },
    {
        path: 'service-pack',
        canActivate: [AuthGuard],
        loadChildren: './service-pack/service-pack.module#ServicePackModule'
    },
    {
        path: 'payment',
        canActivate: [AuthGuard],
        loadChildren: './payment/payment.module#PaymentModule'
    },
    {
        path: 'ship-manager',
        canActivate: [AuthGuard],
        loadChildren: './ship-manager/ship-manager.module#ShipManagerModule'
    }, {
        path: 'admin-tool',
        canActivate: [AuthGuard],
        loadChildren: './dashboard/admin-manager.module#AdminManagerModule'
    },
    {
        path: 'wallet-manager',
        canActivate: [AuthGuard],
        loadChildren: './wallet-manager/wallet-manager.module#WalletManagerModule'
    },
    {
        path: 'wallet-topup',
        canActivate: [AuthGuard],
        loadChildren: './wallet/wallet.module#WalletModule'
    }, {
        path: 'tables',
        canActivate: [AuthGuard],
        loadChildren: './support/tables.module#TablesModule'
    }, {
        path: 'space',
        canActivate: [AuthGuard],
        loadChildren: './space/chartlib.module#ChartlibModule'
    }, {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: './custom-pages/pages.module#PagesDemoModule'
    }, {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: './user/users.module#UsersModule'
    }, {
        path: 'ecommerce',
        canActivate: [AuthGuard],
        loadChildren: './ecommerce/ecommerce.module#EcommerceDemoModule'
    }, {
        path: "collaboration",
        loadChildren: "./collaboration/collaboration.module#CollaborationModule",
    },
    {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: './cart/cart.module#CartModule'
    },
    {
        path: 'merchandise',
        canActivate: [AuthGuard],
        loadChildren: './merchandise/merchandise.module#MerchandiseModule'
    },
    {
        path: 'warehouseimp',
        canActivate: [AuthGuard],
        loadChildren: './warehouseimp/warehouse-imp.module#WarehouseImpModule'
    },
    // {
    //     path: 'warehouseexp',
    //     canActivate: [AuthGuard],
    //     loadChildren: './warehouseexp/warehouse-exp.module#WarehouseExpModule'
    // },
    {
        path: 'order',
        canActivate: [AuthGuard],
        loadChildren: './order/order.module#OrderModule'
    },
    {
        path: 'order-consignment',
        canActivate: [AuthGuard],
        loadChildren: './order-consignment/order-consignment.module#OrderConsignmentModule'
    },
    // {
    //     path: 'delivery',
    //     canActivate: [AuthGuard],
    //     loadChildren: './delivery/delivery.module#DeliveryModule'
    // },
    // {
    //     path: 'task',
    //     canActivate: [AuthGuard],
    //     loadChildren: './task/task.module#TaskModule'
    // },
    // {
    //     path: 'receipt',
    //     canActivate: [AuthGuard],
    //     loadChildren: './receipt/receipt.module#ReceiptModule'
    // },
    {
        path: 'complaint',
        canActivate: [AuthGuard],
        loadChildren: './complaint/complaint.module#ComplaintModule'
    },
    
    // {
    //     path: 'product',
    //     canActivate: [AuthGuard],
    //     loadChildren: './product/product.module#ProductModule',
    // }
]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    // canActivate: [AuthChildGuard],
    loadChildren: './session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
