import { Routes } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { CartManualComponent } from './cart-manual/cart-manual.component';

export const CartRoutes: Routes = [
  {
    path: 'pharse1',
    component: Part1Component
  }, {
    path: 'pharse2',
    component: Part2Component
  }, {
    path: 'pharse3',
    component: Part3Component
  }, {
    path: 'cart-manual',
    component: CartManualComponent
  }
];
