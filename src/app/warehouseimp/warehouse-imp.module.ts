import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddWarehouseImpComponent} from './add/add-warehouse-imp.component';
import { RouterModule } from '@angular/router';
import {WarehouseImpRoutes} from './warehouse-imp.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialogModule } from '@angular/material';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
//service
import {WarehouseImpService} from "app/services/warehouse-imp.service";
import { SystemService } from 'app/services/system.services';
import { UserService } from 'app/services/user.service';

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
    ],
    providers: [
        WarehouseImpService,
        SystemService,
        UserService
    ]
})
export class WarehouseImpModule {
}
