import { Router } from "@angular/router";
import { CartServices } from "app/services/cart.services";
import { ClientProfile } from "./../../model/client-profile.model";
import { DynamicDialogRef } from "primeng/api";
import { DynamicDialogConfig } from "primeng/api";
import { FormArray, FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { DataTable } from "primeng/primeng";
import { MessageService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";
import { containsElement } from "@angular/animations/browser/src/render/shared";

type SkuMapModel = {
  canBookCount: 0;
  discountPrice: 0;
  price: 0;
  propPath: "";
  saleCount: 0;
  skuId: "";
  skuMap: null;
};

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  private account: ClientProfile;
  images = [];
  orderForm: FormGroup;
  rangeValues: number[] = [0, 9999];
  listProductOrders = [];
  columns = [];
  defaultProperty = null;
  activePropertyVal = null;
  skuMaps: SkuMapModel[];
  @ViewChild("orderTB") public orderTB: DataTable;
  wholesales = null;
  isLoading = false;

  minItemVisible = 2;
  countItemVisible;
  showFullItem = false;
  public innerWidth: any;
  isSmallScreen = false;
  filteredValue=[];
  activeIndex = 0;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private cartServices: CartServices,
    private messageService: MessageService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {
      setTimeout(() => {
        this.showFullItem = true;
        this.countItemVisible = 99999;
        this.isSmallScreen = true;
      }, 1000);
    } else {
      this.countItemVisible = this.minItemVisible;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {
      setTimeout(() => {
        this.showFullItem = true;
        this.isSmallScreen = true;
        this.countItemVisible = 99999;
      }, 1000);
    } else {
      setTimeout(() => {
        this.showFullItem = false;
        this.isSmallScreen = false;
        this.countItemVisible = this.minItemVisible;
      }, 1000);
    }
  }

  ngOnInit() {
    this.account = JSON.parse(localStorage.getItem("userData"));
    if (this.config.data && this.config.data.itemPropertys && this.config.data.itemPropertys.length ) {
      this.config.data.itemPropertys.forEach(
        (itemProperty, itemPropertiesIndex) => {
          if (
            itemProperty.childPropertys &&
            itemProperty.childPropertys.length
          ) {
            itemProperty.childPropertys.forEach((property) => {
              property["type"] = itemProperty["type"];
            });
          }
        }
      );

      this.skuMaps = this.config.data.skuMaps;
      this.wholesales = this.config.data.wholesales;
      if (this.wholesales && this.wholesales.length) {
        this.wholesales.forEach((wholesale) => {
          if (wholesale.end == 0) {
            wholesale.end = this.rangeValues[1];
          }
        });
      }
    }
    this.initForm();
    this.orderForm.patchValue(this.config.data);
    this.makeImgThumbs(this.getFormVal("imgThumbs", this.orderForm));
  }

  changeActivePropertyVal(propertyVal) {
    setTimeout(() => {
      if (this.columns && this.columns[0]) {
        let filterBy = `${this.columns[0].field}.properties`;
        this.orderTB.filter(propertyVal, filterBy, "equals");
      }
    }, 250);
  }

  makeImgThumbs(images) {
    this.images = images.map((link, index) => ({
      source: link,
      title: "Image " + (index + 1),
    }));
  }

  initForm() {
    this.orderForm = this.fb.group({
      name: ["", [Validators.required]],
      shopName: ["", Validators.required],
      shopId: [""],
      website: ["", Validators.required],
      sellPriceVND: [0, Validators.required],
      sellPrice: [0, Validators.required],
      quantity: [0, Validators.required],
      stock: [0, Validators.required],
      desc:  ["", Validators.required],
      detailContentHtml:[""]
    });

    let lstControl = [
      { type: "string", name: "image" },
      { type: "string", name: "imageThumb" },
      { type: "array", name: "imgThumbs" },
      { type: "number", name: "rate" },
      { type: "string", name: "imgThumbs" },
      { type: "string", name: "itemUrl" },
      { type: "string", name: "productId" },
      { type: "string", name: "productId" },
      { type: "string", name: "shopId" },
      { type: "boolean", name: "isDetailContent" },
    ];

    this.addListControl(lstControl);
    if (
      this.config.data.itemPropertys &&
      this.config.data.itemPropertys.length
    ) {
      if (this.config.data.itemPropertys.length == 0) {
        this.config.data.itemPropertys = [this.config.data.itemPropertys[0]];
      }

      this.config.data.itemPropertys[0].isDefault = true;
      this.config.data.itemPropertys.forEach((property) => {
        this.orderForm.addControl(property.type, this.fb.control(""));
      });
      this.makeListProductOrder(this.config.data.itemPropertys);

      // set default Property
      try {
        if(this.config.data.itemPropertys && this.config.data.itemPropertys.length ){
          if ( this.config.data.itemPropertys.length == 1 ) {
            this.showFullItem = true;
            this.countItemVisible = 99999;
          } else if ( this.config.data.itemPropertys.length > 1 ) {
            this.activePropertyVal = this.config.data.itemPropertys[0].childPropertys[0];
            this.changeActivePropertyVal(this.activePropertyVal.properties);
          }
        } 
      } catch (e) {
        console.log(e);
      }
    }
  }

  addListControl(lstControl) {
    if (lstControl && lstControl.length) {
      lstControl.forEach((control) => {
        switch (control.type) {
          case "string":
            this.orderForm.addControl(control.name, this.fb.control(""));
            break;
          case "array":
            this.orderForm.addControl(control.name, this.fb.control([]));
            break;
          case "number":
            this.orderForm.addControl(control.name, this.fb.control(0));
            break;
          case "boolean":
            this.orderForm.addControl(control.name, this.fb.control(false));
            break;
          default:
            this.orderForm.addControl(control.name, this.fb.control(""));
            break;
        }
      });
    }
  }

  //Ghép danh sách thuộc tính sản phẩm để khách hàng lựa chọn
  makeListProductOrder(allItemProperties) {
    function mixListProperties(properties: any[][]) {
      let length = properties.length;
      let result = [];
      if (length == 1) {
        result = properties[0];
      } else if (length == 2) {
        properties[0].forEach((item0) => {
          properties[1].forEach((item1) => {
            result.push({ ...item0, ...item1 });
          });
        });
      } else if (length == 3) {
        properties[0].forEach((item0) => {
          properties[1].forEach((item1) => {
            properties[2].forEach((item2) => {
              let item01 = { ...item0, ...item1 };
              result.push({ ...item01, ...item2 });
            });
          });
        });
      }
      return result;
    }

    let itemProperties = [];
    if (allItemProperties && allItemProperties.length) {
      this.columns = allItemProperties.map((itemProperty, index) => {
        let newCol = new Object({});
        newCol["field"] = itemProperty.type ? itemProperty.type : null;
        newCol["name"] = itemProperty.name ? itemProperty.name : null;
        newCol["title"] = itemProperty.title ? itemProperty.title : null;
        newCol["index"] = index;
        return newCol;
      });
      this.defaultProperty = allItemProperties[0];
      itemProperties = allItemProperties.map((i) => []);

      allItemProperties.forEach((itemProperty, itemPropertiesIndex) => {
        if (itemProperty.childPropertys && itemProperty.childPropertys.length) {
          itemProperty.childPropertys.forEach((property) => {
            /**
              Ex:   itemProperty:
                      childPropertys: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
                      name: "SIZE"
                      title: "尺码"
                      type: "SIZE"
              Ex:   property: ~ itemProperty.childPropertys
                      bigImage: null
                      image: null
                      price: 0
                      properties: "190"
                      title: "190"
                      type: "SIZE"

              Has same   type: "SIZE" to mapping
             */

            let newProduct: any = new Object({});
            let propertyKeys = Object.keys(property);
            propertyKeys.forEach((propertyKey) => {
              if (!newProduct[itemProperty.type]) {
                newProduct[itemProperty.type] = new Object({});
                newProduct["baseCost"] = null;
              }

              if (!newProduct[itemProperty.type]["propertyTitle"]) {
                let propertyTitle = itemProperty["title"]
                  ? itemProperty["title"]
                  : null;
                newProduct[itemProperty.type]["propertyTitle"] = propertyTitle;
              }

              if (!newProduct[itemProperty.type]["propertyName"]) {
                let propertyName = itemProperty["name"]
                  ? itemProperty["name"]
                  : null;
                newProduct[itemProperty.type]["propertyName"] = propertyName;
              }

              newProduct[itemProperty.type][propertyKey] = property[propertyKey]
                ? property[propertyKey]
                : null;

              if (
                (!this.wholesales || !this.wholesales.length) &&
                property.price != null
              ) {
                newProduct["baseCost"] = property.price;
              } else if (
                this.wholesales &&
                this.wholesales.length &&
                property.discountPrice != null
              ) {
                newProduct["baseCost"] = property.discountPrice;
              }
            });
            itemProperties[itemPropertiesIndex].push(newProduct);
          });
        }
      });

      this.listProductOrders = mixListProperties(itemProperties);
      this.listProductOrders.forEach((prOrder) => {
        let mappingProperties: string[] = Object.keys(prOrder)
          .map((key) => {
            if (prOrder[key] && prOrder[key].properties != null) {
              return prOrder[key].properties;
            } else {
              return null;
            }
          })
          .filter((item) => item != null);

        let skuMatch = this.getProductInfor(mappingProperties);

        if (skuMatch && (prOrder.baseCost == null || prOrder.baseCost == 0)) {
          prOrder.baseCost = skuMatch.price;
        }



        if (prOrder && skuMatch) {
          prOrder["canBookCount"] = skuMatch.canBookCount;
          prOrder["discountPrice"] = skuMatch.discountPrice;
          prOrder["skuId"] = skuMatch.skuId;
          prOrder["saleCount"] = skuMatch.saleCount;
          if (
            this.wholesales &&
            this.wholesales.length &&
            skuMatch.discountPrice != null
          ) {
            prOrder["baseCost"] = skuMatch.discountPrice;
          }
        }
        if (!prOrder.canBookCount || prOrder.canBookCount == 0) {
          prOrder.disabled = true;
        }
      });
    }
  }

  onchangeQuantity(val, row) {
    if(this.config.data.itemPropertys && this.config.data.itemPropertys.length){
      let canBookCount = row.canBookCount ? row.canBookCount : 0;
      if (val >= canBookCount) {
        row.quantity = canBookCount;
      }
  
      if (
        val <= this.rangeValues[0] ||
        val.toString().includes(".") ||
        val.toString().includes(",")
      ) {
        row.quantity = this.rangeValues[0];
      }
      row.quantity = Number(row.quantity);
    }
    else if(!this.config.data.itemPropertys || !this.config.data.itemPropertys.length ){
      this.orderForm.patchValue( {quantity : val })

      if (val >=  this.config.data.stock ) {
        this.orderForm.patchValue( {quantity :  this.config.data.stock })
      }
      if (
        val <= this.rangeValues[0] ||
        val.toString().includes(".") ||
        val.toString().includes(",")
      ) {
        this.orderForm.patchValue( {quantity : this.rangeValues[0] })
      }

    }

  }

  getProductInfor(mappingProperties: string[], key?: string): any {
    // nếu website là  1688 thì sẽ dùng trường skyMap, nếu website là taobao, tmall thì sẽ dùng trường propPath
    let mappingKey = "skuMap"; // set default
    //Map thông qua supperbuy nên không có trường SkuMap --> tất cả đều xử lý trên trường Propath
    // if (this.config.data.website.toLowerCase().includes("1688")
    // ) {
    //   mappingKey = "skuMap";
    // } else if (
    if(
      this.config.data.website.toLowerCase().includes("taobao") ||
      this.config.data.website.toLowerCase().includes("tb") ||
      this.config.data.website.toLowerCase().includes("alibaba") ||
      this.config.data.website.toLowerCase().includes("1688") ||
      this.config.data.website.toLowerCase().includes("tmall")
    ) {
      mappingKey = "propPath";
    }
    
    let skuMap: SkuMapModel = this.skuMaps.find((skuMapData: any) => {
      let check = mappingProperties.map((property) => {
        if (
          skuMapData &&
          skuMapData[mappingKey] &&
          skuMapData[mappingKey].length
        ) {
          return skuMapData[mappingKey].includes(property);
        } else {
          return null;
        }
      });
      return check.every((item) => item == true);
    });

    if (skuMap) {
      if (!skuMap.price) {
        skuMap.price = 0;
      } else {
        skuMap.price = skuMap && skuMap.price ? skuMap.price : 0;
      }
      if (key) {
        return skuMap[key] ? skuMap[key] : null;
      } else {
        return skuMap;
      }
    } else {
      return null;
    }
  }

  hideDefaultColumn(columns) {
    let columnVisible = [];
    let count = 0;
    if(this.config.data.itemPropertys && this.config.data.itemPropertys.length){
      if(this.config.data.itemPropertys.length == 1){
        return columns;
      } else  if(this.config.data.itemPropertys.length > 1){
        for( let i = 0 ; i < columns.length ; i++){
          if( columns[i].field == this.defaultProperty.type && count==0 ){
            count++;
            continue;
          } else {
            columnVisible.push(columns[i]);
          }
        }
        return columnVisible;
      } 
    }

  }

  getFormVal(key, form: FormGroup) {
    let formVal = form.getRawValue();
    if (formVal && key) {
      return formVal[key];
    } else {
      return formVal;
    }
  }

  get orderFormG() {
    return this.orderForm.controls;
  }

  getProductCost(baseCost) {
    let productCount = this.countProductOrder();

    if (
      !this.wholesales ||
      (this.wholesales &&
        (this.wholesales.length == 0 ||
          productCount == 0 ||
          productCount < this.rangeValues[0] ||
          productCount < this.wholesales[0].begin))
    ) {
      return baseCost;
    } else {
      let salePrice = null;
      if (this.wholesales.length) {
        this.wholesales.forEach((sale) => {
          sale.end = sale && sale.end != null ? sale.end : this.rangeValues[1];
          if (productCount >= sale.begin && productCount <= sale.end) {
            salePrice = sale.price;
          }
        });
      }
      if (salePrice) {
        return salePrice;
      } else {
        return baseCost ? baseCost : 0;
      }
    }
  }

  countProductOrder() {
    if( this.config.data.itemPropertys && 
      this.config.data.itemPropertys.length && 
      this.config.data.itemPropertys.length >= 1){
        if (this.orderTB && this.orderTB._value && this.orderTB._value.length) {
          let sum = 0;
          this.orderTB._value.forEach((currentPr) => {
            if (currentPr && currentPr.quantity) {
              sum += currentPr.quantity;
            }
          });
          return sum;
        }
    } else if( !this.config.data.itemPropertys || !this.config.data.itemPropertys.length ){
      return this.orderForm.getRawValue().quantity;
    }
    return 0;
  }

  sumProductCost() {
    let sumMoney = 0;
    if( this.config.data.itemPropertys && 
      this.config.data.itemPropertys.length && 
      this.config.data.itemPropertys.length >= 1){
        if (this.orderTB && this.orderTB._value && this.orderTB._value.length) {
          this.orderTB._value.forEach((product) => {
            if (product.quantity) {
              let cost = product.baseCost;
              if (this.wholesales && this.wholesales.length) {
                cost = this.getProductCost(product.baseCost);
              }
              sumMoney += product.quantity * cost;
            }
          });
        }
    } else if( !this.config.data.itemPropertys || !this.config.data.itemPropertys.length ){
      sumMoney = this.config.data.sellPrice * this.orderForm.getRawValue().quantity;
    }
    return sumMoney;
  }

  sumVNCost() {
    let chinaCost = this.sumProductCost();
    let rate = this.config.data.rate;
    if (chinaCost && rate) {
      return chinaCost * rate;
    } else {
      return 0;
    }
  }

  getVnCost(chinaCost) {
    let rate = this.config.data.rate;
    if (rate) {
      return chinaCost * rate;
    } else {
      return 0;
    }
  }

  close() {
    this.ref.close(null);
  }

  addToCart() {
    this.isLoading = true;
    let items = [];

    if( this.config.data.itemPropertys &&  
      this.config.data.itemPropertys.length && 
      this.config.data.itemPropertys.length >= 1){
      let products = this.orderTB._value.filter((item) => item.quantity > 0);
      if (this.orderTB && products && products.length) {
        items = products.map((productInfor) => {
          let newProduct = new Object({});
          let prKeys = Object.keys(productInfor);
  
          let itemImages = [];
          let itemPropertiesName = [];
          let itemPropertiesType = [];
          if (prKeys && prKeys.length) {
            prKeys.forEach((key) => {
              if (
                productInfor &&
                productInfor[key] != null &&
                productInfor[key]["bigImage"] != null
              ) {
                itemImages.push(productInfor[key]["bigImage"]);
              }
              if (
                productInfor &&
                productInfor[key] != null &&
                productInfor[key]["propertyTitle"] != null
              ) {
                itemPropertiesType.push(productInfor[key]["propertyTitle"]);
              }
              if (
                productInfor &&
                productInfor[key] != null &&
                productInfor[key]["title"] != null
              ) {
                itemPropertiesName.push(productInfor[key]["title"]); // properties
              }
            });
          }
  
          itemImages = itemImages.filter((item) => item != null);
          itemPropertiesType = itemPropertiesType.filter((item) => item != null);
          itemPropertiesName = itemPropertiesName.filter((item) => item != null);
  
          newProduct["itemId"] = this.config.data.productId;
          newProduct["itemName"] = this.config.data.name;
          newProduct["itemLink"] = this.config.data.itemUrl;
          newProduct["itemPriceNDT"] = this.getProductCost(productInfor.baseCost);
          newProduct["itemPrice"] =
            this.getProductCost(productInfor.baseCost) * this.config.data.rate;
          newProduct["rate"] = this.config.data.rate;
          if(itemImages && itemImages[0]){
            newProduct["itemImage"] = itemImages[0]
          } else if( this.config.data && this.config.data.imgThumbs && this.config.data.imgThumbs.length && this.images[this.activeIndex] ){
            newProduct["itemImage"] = this.images[this.activeIndex].source;
            itemImages = this.images.map(image => image.source);
          } else {
            itemImages = null;
          }
          newProduct["quantity"] = productInfor.quantity;
          newProduct["requireMin"] =
            this.wholesales && this.wholesales.length
              ? this.wholesales[0].begin
              : 0;
          newProduct["stock"] = productInfor.canBookCount;
          newProduct["PropetiesType"] = itemPropertiesType.join(";");
          newProduct["propetiesName"] = itemPropertiesName.join(";");
          newProduct["propetiesImage"] = itemImages.join(";");
          newProduct["Description"] = productInfor.desc;
          newProduct["wholesales"] = this.wholesales;
          
          return newProduct;
        });
      } 
    } else if( !this.config.data.itemPropertys || !this.config.data.itemPropertys.length ){
      let newProduct = new Object({});
      let formVal = this.orderForm.getRawValue();
      newProduct["itemId"] = this.config.data.productId;
      newProduct["itemName"] = this.config.data.name;
      newProduct["itemLink"] = this.config.data.itemUrl;
      newProduct["itemPriceNDT"] = this.getProductCost( this.config.data.sellPrice );
      newProduct["itemPrice"] = this.getProductCost(this.config.data.sellPrice) * this.config.data.rate;
      newProduct["rate"] = this.config.data.rate;
      newProduct["itemImage"] = this.config.data.imgThumbs.length ? this.config.data.imgThumbs[0]: null;
      newProduct["quantity"] = formVal.quantity;
      newProduct["stock"] = formVal.stock;
      newProduct["Description"] = formVal.desc;
      items.push(newProduct)
    }

    let params = {
      userId: this.account.userId,
      shopId: this.config.data.shopId,
      shopName: this.config.data.shopName,
      website: this.config.data.website,
      items: items,
    };

    this.cartServices.addPrFindByLinkToCart(params).subscribe(res => {
        if(res && res.result && res.result.success){
          this.messageService.add({
            severity:'success',
            summary: 'Thành công  ',
            detail:`Bạn đã thêm ${this.countProductOrder()} sản phẩm vào giỏ hàng`
          });
          this.listProductOrders.forEach( (product) => {
            product.quantity = 0;
            product.desc = "";
          })
          this.showFullItem = false;
          this.countItemVisible = this.minItemVisible;
        } else {
          this.messageService.add({severity:'error', summary: 'Lỗi', detail:'Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng'});
        }
        this.isLoading = false;
        this.clearMessage();
      },
      err => {
        this.isLoading = false;
        this.messageService.add({severity:'error', summary: 'Lỗi', detail:'Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng'});
        this.clearMessage();
      })
  }


  clearMessage(){
    setTimeout( () => {
      this.messageService.clear();
    }, 5000)
  }


  toggleShowFullItem() {
    this.showFullItem = !this.showFullItem;
    if (this.showFullItem) {
      this.countItemVisible = 99999;
    } else {
      this.countItemVisible = this.minItemVisible;
    }
  }

  goToCart() {
    // this.router.navigate(["/cart/pharse1"]);
    window.open("/cart/pharse1", '_blank');
  }

  handleFilter($event){
    this.filteredValue = $event.filteredValue;
  }

  onImageChange($event){
    this.activeIndex = $event.index; 
  }
}
