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
import { ExchangeManagerComponent } from './exchange-manager/exchange-manager.component';
//import { TopupComponent } from './topup/topup.component';
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
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';

import { FormsModule } from '@angular/forms';
import { WalletService } from 'app/services/wallet.services';
import { UserService } from 'app/services/user.service';
import { SystemService } from 'app/services/system.services';
import { ClientTopupComponent } from './client-topup/client-topup.component';
import { CommonViewModule } from 'app/common-view/common-view.module';
import { ShareCommonModule } from 'app/common/share-common.module';
import { ClipboardService, ClipboardModule } from 'ngx-clipboard';
import { TooltipModule } from "primeng/tooltip";
import { ToastModule } from "primeng/toast";

//primeng service
import { MessageService } from 'primeng/api';

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
    OverlayPanelModule,
    DialogModule,
    ClipboardModule,
    TooltipModule,
    ToastModule
  ],
  declarations: [
    ExchangeComponent,
    ExchangeManagerComponent,
    //TopupComponent,
    ClientTopupComponent,
  ],
  providers: [
    WalletService,
    UserService,
    SystemService,
    MessageService,
    ClipboardService
  ],
})

export class WalletManagerModule {}
