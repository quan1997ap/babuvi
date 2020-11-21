import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderBuyComponent} from './order-buy/order-buy.component';
import {OrderBuyEditComponent} from './order-buy-edit/order-buy-edit.component';
import {OrderFinishComponent} from './order-finish/order-finish.component';
import {OrderBuyReworkComponent} from './order-buy-rework/order-buy-rework.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {OrderRoutes} from './order.routing';
import {OrderService} from 'app/services/order.service';
import {MatCurrencyFormatModule} from 'mat-currency-format';

import {
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule,
    MatFormFieldModule
} from '@angular/material';
import {OrderDetailService} from 'app/services/order-detail.service';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxCurrencyModule} from "ngx-currency";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [
        OrderBuyComponent,
        OrderBuyEditComponent,
        OrderFinishComponent,
        OrderBuyReworkComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(OrderRoutes),
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
        MatCurrencyFormatModule,
        MatProgressSpinnerModule,
        NgxCurrencyModule,
        MatTooltipModule,
    ],
    providers: [OrderService, OrderDetailService]
})
export class OrderModule {
}
