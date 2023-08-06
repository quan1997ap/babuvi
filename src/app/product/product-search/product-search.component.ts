import { CartServices } from 'app/services/cart.services';
import { ProductDetailComponent } from "./../product-detail/product-detail.component";
import { DialogService } from "primeng/api";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { ConfirmationService } from "primeng/api"

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.scss"],
})
export class ProductSearchComponent implements OnInit {
  searchForm: FormGroup;
  showForm = true;
  constructor(
    private formBuilder: FormBuilder,
    public dialogService: DialogService,
    private cartServices: CartServices,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private confirm: ConfirmationService
  ) {
    this.searchForm = this.formBuilder.group({ searchUrl: "" });
  }


  clearSearch(){
    this.searchForm.get('searchUrl').reset();
  }
  openOrderDialog( productInfor ) {
    const ref = this.dialogService.open(ProductDetailComponent, {
      data: productInfor,
      baseZIndex: 1000,
      header: "Thông tin sản phẩm",
      width: "98%",
      height: "98%",
      style: { "max-width": "1200px", "max-height": "700px", "overflow-y": "auto" },
    });
    this.showForm = false;

    ref.onClose.subscribe((data: any[]) => {
      this.showForm = true
    })
  }


  ngOnInit() {
    
  }

  getDataProduct(){
    this.spinner.show();

    this.cartServices.getProductDataByUrl(this.searchForm.value.searchUrl).subscribe(
      res => {
        if(res && res.result.data && res.message == "successful" ){
          if(res.result && res.result.data){
            let types = [];
            res.result.data.itemPropertys.forEach((itemProperty, index) => {
              if(types.includes(itemProperty.type)){
                itemProperty.type = `${itemProperty.type}${index}`;
              }
              types.push(itemProperty.type)
            });
            this.openOrderDialog(res.result.data);
          }
        } else {
          this.searchForm.controls["searchUrl"].setErrors({notFound: true});
        }
      }, 
      err => {
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    )
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.searchForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }


}
