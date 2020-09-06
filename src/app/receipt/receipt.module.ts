import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatCurrencyFormatModule} from 'mat-currency-format';

import {
    MatIconModule,
} from '@angular/material';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxCurrencyModule} from "ngx-currency";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ReceiptRoutes } from './receipt.routing';
//component
import {AddNewReceiptComponent} from './addnew-receipt/addnew-receipt.component';
import {ListReceiptComponent} from './list-receipt/list-receipt.component';
//primeng service
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
//primeng
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [
        AddNewReceiptComponent,
        ListReceiptComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ReceiptRoutes),
        MatIconModule,
        MatCurrencyFormatModule,
        MatProgressSpinnerModule,
        NgxCurrencyModule,
        MatTooltipModule,
        CalendarModule,
        DropdownModule,
        OverlayPanelModule,
        ConfirmDialogModule,
        ToastModule,
        ProgressSpinnerModule,
        TableModule,
        CheckboxModule
    ],
    providers: [
        ConfirmationService,
        MessageService
    ]
})
export class ReceiptModule {
}
