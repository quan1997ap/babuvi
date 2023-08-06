import { Routes } from '@angular/router';

import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeManagerComponent } from './exchange-manager/exchange-manager.component';
//import { TopupComponent } from './topup/topup.component';
import { ClientTopupComponent } from './client-topup/client-topup.component';

export const ExchangeRoutes: Routes = [{
  path: '',
  children: [{
    path: 'exchange',
    component: ExchangeComponent
  },{
    path: 'exchange-manager',
    component: ExchangeManagerComponent
  }, /*{
    path: 'topup',
    component: TopupComponent
  },*/{
    path: 'client-topup',
    component: ClientTopupComponent
  },]
}];
