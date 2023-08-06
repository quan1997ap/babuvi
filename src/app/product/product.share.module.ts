import { ShareCommonModule } from '../common/share-common.module';
import { CartServices } from "app/services/cart.services";
import { DialogService, MessageService } from "primeng/api";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { GalleriaModule } from "primeng/galleria";
import { SliderModule } from "primeng/slider";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";
import { SelectButtonModule } from "primeng/selectbutton";
import { TooltipModule } from "primeng/tooltip";
import { SpinnerModule } from "primeng/spinner";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TabViewModule } from "primeng/tabview";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { InputMaskModule } from "primeng/inputmask";
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';

@NgModule({
  declarations: [
    //ProductCheckingComponent, ProductOrderingComponent
    ProductDetailComponent,
    ProductSearchComponent
  ],
  imports: [
    ShareCommonModule,
    InputMaskModule,
    CommonModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    GalleriaModule,
    SliderModule,
    MessagesModule,
    MessageModule,
    NgxSpinnerModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    SelectButtonModule,
    TooltipModule,
    SpinnerModule,
    InputTextareaModule,
    TabViewModule,
    OverlayPanelModule,
  ],
  exports: [
    ShareCommonModule,
    InputMaskModule,
    CommonModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    GalleriaModule,
    SliderModule,
    MessagesModule,
    MessageModule,
    NgxSpinnerModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    SelectButtonModule,
    TooltipModule,
    SpinnerModule,
    InputTextareaModule,
    TabViewModule,
    OverlayPanelModule,
    ProductSearchComponent,
    ProductDetailComponent
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
  entryComponents: [ProductDetailComponent],
})
export class ProductSharedModule {}
