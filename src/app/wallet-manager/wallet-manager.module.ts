import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ExchangeRoutes } from './wallet-manager.routing';
import { ExchangeComponent } from './exchange/exchange.component';
import { TopupComponent } from './topup/topup.component';
import { MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatButtonModule ,
        MatTooltipModule, 
        MatProgressSpinnerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { WalletService } from 'app/services/wallet.services';
import { UserService } from 'app/services/user.service';
import { SystemService } from 'app/services/system.services';
import { ClientTopupComponent } from './client-topup/client-topup.component';
import { CommonViewModule } from 'app/common-view/common-view.module';
import { ShareCommonModule } from 'app/common/share-common.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExchangeRoutes),
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTooltipModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    FlexLayoutModule,
    ChartsModule,
    CommonViewModule,
    ShareCommonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    ExchangeComponent,
    TopupComponent,
    ClientTopupComponent,
  ],
  providers: [
    WalletService,
    UserService,
    SystemService
  ],
})

export class WalletManagerModule {}
