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
        path: 'user-pages',
        canActivate: [AuthGuard],
        loadChildren: './user-pages/users.module#UsersModule'
    }, {
        path: 'ecommerce',
        canActivate: [AuthGuard],
        loadChildren: './ecommerce/ecommerce.module#EcommerceDemoModule'
    }, {
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
    {
        path: 'order',
        canActivate: [AuthGuard],
        loadChildren: './order/order.module#OrderModule'
    },
    {
        path: 'delivery',
        canActivate: [AuthGuard],
        loadChildren: './delivery/delivery.module#DeliveryModule'
    }
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
