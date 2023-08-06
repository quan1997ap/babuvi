import { ProductRoutes } from "./product.routing";
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CartServices } from 'app/services/cart.services';
import { DialogService } from 'primeng/api';
//import { ProductCheckingPageComponent } from './product-checking-page/product-checking-page.component';
import { ProductSharedModule } from './product.share.module';
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";


// const ProductCheckingRoutes: Routes = [
//   {
//     path: "",
//     component: ProductCheckingPageComponent,
//   },
// ];

@NgModule({
  declarations: [
    //ProductCheckingPageComponent
  ],
  imports: [
    RouterModule.forChild(ProductRoutes),
    ProductSharedModule
  ],
  providers: [
    DialogService,
    CartServices,
    MessageService,
    NgxSpinnerService,
    ConfirmationService,
    DynamicDialogRef,
    DynamicDialogConfig
  ],
  entryComponents: [],
})
export class ProductCheckingModule {}
