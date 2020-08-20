import {
  NgModule
} from '@angular/core';
import {
  CurrencyFormat
} from './pipe-format-money.component';
import { NumberFormatPipe } from './number.pipe';
import { InfiniteScrollDirective } from './InfiniteScrollDirective.directive';

@NgModule({
  imports: [

  ],
  declarations: [
    CurrencyFormat,
    NumberFormatPipe,
    InfiniteScrollDirective,
  ],
  exports: [
    CurrencyFormat,
    NumberFormatPipe,
    InfiniteScrollDirective,
  ]
})

export class ShareCommonModule { }