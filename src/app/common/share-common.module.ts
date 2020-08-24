import {
  NgModule
} from '@angular/core';
import {
  CurrencyFormat
} from './pipe-format-money.component';
import { NumberFormatPipe } from './number.pipe';
import { InfiniteScrollDirective } from './InfiniteScrollDirective.directive';
import { CurrencyFormatChina } from './pipe-china-money.component';

@NgModule({
  imports: [

  ],
  declarations: [
    CurrencyFormat,
    NumberFormatPipe,
    InfiniteScrollDirective,
    CurrencyFormatChina,
  ],
  exports: [
    CurrencyFormat,
    NumberFormatPipe,
    InfiniteScrollDirective,
    CurrencyFormatChina,
  ]
})

export class ShareCommonModule { }