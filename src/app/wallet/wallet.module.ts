import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatCheckboxModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WalletRoutes } from './wallet.routing';
import { ConsoleCardComponent } from './console-card/console-card.component';
import { lsReceiptTopupService } from 'app/services/is-receipt-topup.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WalletRoutes),
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
   ],
  declarations: [
    ConsoleCardComponent,
  ],
  providers: [
    lsReceiptTopupService
  ]
})

export class WalletModule {}
