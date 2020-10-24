import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddWarehouseExpComponent} from './add/add-warehouse-exp.component';
import { RouterModule } from '@angular/router';
import {WarehouseExpRoutes} from './warehouse-exp.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialogModule } from '@angular/material';
import {WarehouseImpService} from '../services/warehouse-imp.service';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [AddWarehouseExpComponent],
    imports: [
        RouterModule.forChild(WarehouseExpRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        MatDialogModule,
        MatProgressSpinnerModule,
    ],
    providers: [WarehouseImpService]
})
export class WarehouseExpModule {
}
