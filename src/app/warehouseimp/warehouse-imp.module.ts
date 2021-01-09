import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddWarehouseImpComponent} from './add/add-warehouse-imp.component';
import { RouterModule } from '@angular/router';
import {WarehouseImpRoutes} from './warehouse-imp.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialogModule } from '@angular/material';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
//primeng service
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
//primeng
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
//service
import {WarehouseImpService} from "app/services/warehouse-imp.service";
import { SystemService } from 'app/services/system.services';
import { UserService } from 'app/services/user.service';
import { MerchandiseServices } from 'app/services/merchandise.services';

@NgModule({
    declarations: [AddWarehouseImpComponent],
    imports: [
        RouterModule.forChild(WarehouseImpRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        ConfirmDialogModule,
        ToastModule,
    ],
    providers: [
        WarehouseImpService,
        SystemService,
        UserService,
        ConfirmationService,
        MessageService,
        MerchandiseServices
    ]
})
export class WarehouseImpModule {
}
