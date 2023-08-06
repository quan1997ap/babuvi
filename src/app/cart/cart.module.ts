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
  MatCheckboxModule,
  MatGridListModule,
  MatExpansionModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutes } from './cart.routing';
import { NotifierOptions, NotifierModule } from 'angular-notifier';
import { MessageService } from 'primeng/api';
import { ShareCommonModule } from '../common/share-common.module';
import {
  MessagesModule
} from 'primeng/primeng';
import { CommonViewModule } from 'app/common-view/common-view.module';
//Component
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { CartManualComponent } from './cart-manual/cart-manual.component';
//Services
import { CartServices } from 'app/services/cart.services';
import { ItemsCartService } from 'app/services/items-cart.service';
import { OrderService } from 'app/services/order.service';
import { WalletService } from 'app/services/wallet.services';
import { FileManagerServices } from 'app/services/fileManager.services';


//Prime Services
import { ConfirmationService } from 'primeng/api';

//Prime module
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// Shared
import { SharedCouponModule } from './../payment/shared-coupon.module';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CartRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NotifierModule.withConfig(customNotifierOptions),
    ShareCommonModule,
    MessagesModule,
    CommonViewModule,
    TableModule,
    OverlayPanelModule,
    ToastModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    SharedCouponModule
   ],
  declarations: [
    Part1Component,
    Part2Component,
    Part3Component,
    CartManualComponent
  ],
  providers: [
    CartServices,
    ItemsCartService,
    OrderService,
    MessageService,
    ConfirmationService,
    WalletService,
    FileManagerServices
  ]
})

export class CartModule {}
