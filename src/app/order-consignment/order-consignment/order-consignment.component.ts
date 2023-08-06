import { forkJoin } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { ClientProfile } from 'app/model/client-profile.model';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import * as _ from 'lodash';
// model
import { Warehouse } from './../../model/warehouse.model';
import { ServiceCart } from './../../model/ServicesCart.model';
import { Merchandise } from './../../model/merchandise.model';
import { lstAddress } from 'app/model/lstAddress.model';
import { AddressDataEmitModel } from './../config-delivery-address/config-delivery-address.component';

// services
// import { OrderService } from './../../services/order.service';
import { CartServices } from './../../services/cart.services';
import { SystemService } from './../../services/system.services';
import { OrderConsignmentService } from './../../services/order-consignment.service';
import { PassDataService } from 'app/services/pass-data.services';
import { MessageService } from 'primeng/components/common/api';


@Component({
  selector: 'app-order-consignment',
  templateUrl: './order-consignment.component.html',
  styleUrls: ['./order-consignment.component.scss']
})
export class OrderConsignmentComponent implements OnInit {

  selectedCategories: string[] = [];

  configAddressFormVisible = false;
  private account: ClientProfile;
  orderConsignmentForm: FormGroup;
  msgs: Message[] = [];
  updateSuccess = false;

  consignmentWarehouses: Warehouse[] = [];
  consignmentWarehouseOptions = [];

  warehouseVNs: Warehouse[] = [];
  getWarehouseVNOptions = [];

  deliveryAddressList: lstAddress[] = [];
  currentdeliveryAddress: lstAddress = new lstAddress();

  lsService: ServiceCart[] = [];
  lsServiceOption: any[] = [];

  classifications: any[] = []
  classificationOptions: any[] = [];

  shippingTypes: any[] = [];
  shippingTypeOptions: any[] = []

  lsMerchandise: any[] = [];

  pageSize: number;
  pageIndex: number;


  displayAllService = false;
  displayAllClassification = false;
  displayAllShippingType = false;

  constructor(
    public cdr: ChangeDetectorRef,
    private _passData: PassDataService,
    private formBuilder: FormBuilder,
    private orderConsignmentService: OrderConsignmentService,
    private systemService: SystemService,
    private cartServices: CartServices,
    private router: Router) {
    this._passData.loading(true);
  }

  ngOnInit() {
    this.account = JSON.parse(localStorage.getItem('userData'));
    this.orderConsignmentForm = this.formBuilder.group({
      warehouseStarted: new FormControl({}, [Validators.required]),
      warehouseEnd: new FormControl({}, [Validators.required]),
      lsService: new FormControl([], [Validators.required]),
      classifications: new FormControl([], [Validators.required]),
      shippingType: new FormControl([], [Validators.required]),
    });

    this.getAllFormData();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 800) {
    } else {
    }
  }

  getAllFormData() {
    this._passData.loading(true);
    forkJoin(
      this.systemService.getListConsignmentWarehouse(),
      this.systemService.getWarehouseVN(),
      this.cartServices.getListDeliveryAddressByUserId(this.account.userId),
      this.cartServices.getLsServiceConsignment(),
      this.cartServices.getListClassification(),
      this.systemService.getShippingType()
    ).subscribe(res => {
      if (res) {
        if (res[0] && res[0].length > 0) {
          this.consignmentWarehouses = res[0];
          this.consignmentWarehouseOptions = res[0].map(
            (consignmentWarehouse: Warehouse) => ({ label: consignmentWarehouse.consignmentName, value: consignmentWarehouse })
          );
        }
        if (res[1] && res[1].length > 0) {
          this.warehouseVNs = res[1];
          this.getWarehouseVNOptions = res[1].map(
            (consignmentWarehouse: Warehouse) => ({ label: consignmentWarehouse.customerName, value: consignmentWarehouse })
          );
        }
        if (res[2] && res[2].length > 0) {
          this.deliveryAddressList = res[2];
          const defaultAddressLst = res[2].filter((address: lstAddress) => address.isDefault === true);
          if (defaultAddressLst && defaultAddressLst.length > 0) {
            this.currentdeliveryAddress = defaultAddressLst[0];
          } else {
            this.currentdeliveryAddress = res[2][0];
          }
        }
        if (res[3] && res[3].length > 0) {
          this.lsService = res[3];
          this.lsServiceOption = res[3].map(
            (service: any) => ({ label: service.display, value: service.serviceId })
          );
        }

        if (res[4] && res[4].length > 0) {
          this.classifications = res[4];
          this.classificationOptions = res[4].map(
            (classification: any) => ({ label: classification.name, value: classification.classificationId })
          );
        }

        let defaultShippingType;
        if (res[5] && res[5].length > 0) {
          this.shippingTypes = res[5];
          this.shippingTypeOptions = res[5].map(
            (shippingType: any) => ({ label: shippingType.groupName, value: shippingType.serviceGroupId })
          );
          defaultShippingType = this.shippingTypes.find( shippingType => shippingType.isDefault == '1')['serviceGroupId'];
        }

        this.setFormDefault([], [], defaultShippingType);
        this.cdr.detectChanges();
      }
      this._passData.loading(false);
    }, error => {
      this._passData.loading(false);
      this.showMessage('Có lỗi xảy ra, hãy thử lại!', 'error');
    });
  }

  shippingTypeChange($event){
    let serviceGroupId = $event.value;
    this.lsService = [];
    this.lsServiceOption = [];
    this.loadLsServiceByShippingType(serviceGroupId);
  }

  loadLsServiceByShippingType(serviceGroupId){
    this.cartServices.getLsServiceConsignment(serviceGroupId).subscribe(
      resService => {
      if (resService && resService.length > 0) {
        this.lsService = resService;
        this.lsServiceOption = resService.filter( service => service.isOption == '2' ).map(
          (service: any) => ({ label: service.display, value: service.serviceId })
        );
        this.orderConsignmentForm.controls['lsService'].patchValue([])
        this.cdr.detectChanges();
      }
    }, err=> {
      this.showMessage('Có lỗi xảy ra khi lấy danh sách dịch vụ!', 'error');
    })
  }

  addMerchandise() {
    this.lsMerchandise.push({
      MerchandiseCode: '',
      PriceDeclared: 0,
      Description: ''
    });
  }

  deleteMerchandise(index) {
    this.lsMerchandise.splice(index, 1);
    this.cdr.detectChanges();
  }


  addOrderConsignment() {
    if (this.validateForm() === true) {
      this._passData.loading(true);
      // update data
      const orderConsignmen = new OrderConsignmentModel();
      orderConsignmen.WarehouseStartedId = this.orderConsignmentForm.value.warehouseStarted.warehouseId;
      orderConsignmen.WarehouseEndId = this.orderConsignmentForm.value.warehouseEnd.warehouseId;
      orderConsignmen.lsService = this.orderConsignmentForm.value.lsService.map(service => ({ ServiceId: service }));
      orderConsignmen.lsClassification = this.orderConsignmentForm.value.classifications.map(
        classification => ({ ClassificationId: classification })
      );
      orderConsignmen.lsMerchandise = _.cloneDeep(this.lsMerchandise).map(merchandise => {
        merchandise.PriceDeclared = Number(merchandise.PriceDeclared);
        return merchandise;
      });
      orderConsignmen.DeliveryAddressId = this.currentdeliveryAddress.deliveryAddressId;
      orderConsignmen.shippingType = this.orderConsignmentForm.value.shippingType;
      this.orderConsignmentService.addOrderConsignment(orderConsignmen).subscribe(
        resCreate => {
          if (resCreate && resCreate.result && resCreate.result.success === true) {
            this.updateSuccess = true;
          } else {
            this.showMessage(resCreate.result.message, 'error');
          }
          this._passData.loading(false);
        },
        // errCreate => {
        //   if (errCreate.result && errCreate.result.message) {
        //     this.showMessage('Có lỗi xảy ra: ' + errCreate.result.message, 'error');
        //   }   else {
        //     this.showMessage('Có lỗi xảy ra, hãy thử lại!', 'error');
        //   }
        //   // this.showMessage(res.result.message, 'error');
        //   this._passData.loading(false);
        // }
      )
    }
  }

  validateForm() {
    let errMerchandiseCode;
    let errPriceDeclared;
    this.lsMerchandise.forEach(merchandise => {
      if (!merchandise.MerchandiseCode) {
        errMerchandiseCode = true;
      } else if (merchandise.PriceDeclared === null || merchandise.PriceDeclared === undefined) {
        errPriceDeclared = true;
      }
    })

    if (errMerchandiseCode === true) {
      this.showMessage('Bạn phải điền đủ mã kiện hàng', 'error');
      return false;
    } else if (errPriceDeclared === true) {
      this.showMessage('Bạn phải điền đủ giá kiện hàng', 'error');
      return false;
    } else if (errMerchandiseCode === true && errPriceDeclared === true) {
      this.showMessage('Bạn phải điền đủ mã kiện hàng và giỏ kiện hàng', 'error');
      return false;
    } else if (!this.currentdeliveryAddress) {
      this.showMessage('Bạn phải chọn địa chỉ nhận hàng', 'error');
      return false;
    } else {
      return true;
    }

  }

  resetLsMerchandise() {
    this.lsMerchandise = [{
      MerchandiseCode: '',
      PriceDeclared: 0,
      Description: ''
    }]
    this.cdr.detectChanges();
  }

  setFormDefault(lsService?, classifications?, defaultShippingType?) {
    let lsServiceID = [];
    let classificationID = [];
    if (lsService) {
      lsServiceID = lsService;
    }
    if (classifications) {
      classificationID = classifications;
    }
    this.resetLsMerchandise();
    this.orderConsignmentForm.patchValue({
      warehouseStarted: this.consignmentWarehouseOptions[0].value,
      warehouseEnd: this.getWarehouseVNOptions[0].value,
      lsService: lsServiceID,
      classifications: classificationID,
    });
    if(defaultShippingType){
      this.orderConsignmentForm.patchValue({
        shippingType: defaultShippingType
      })
      this.loadLsServiceByShippingType(defaultShippingType);
    }
  }

  openDeliveryAddressForm() {
    this.configAddressFormVisible = true;
  }

  viewAllService() {
    this.displayAllService = !this.displayAllService;
  }

  viewAllShippingType() {
    this.displayAllShippingType = !this.displayAllShippingType;
  }

  viewAllClassification() {
    this.displayAllClassification = !this.displayAllClassification;
  }

  closeDeliveryAddressForm(dataReceived: AddressDataEmitModel) {
    // receive address from ConfigDeliveryAddressComponent
    if (dataReceived) {
      if (dataReceived.close === true) {
        this.configAddressFormVisible = false;
      }
      if (dataReceived.addressSelected) {
        this.currentdeliveryAddress = dataReceived.addressSelected;
      }
      if (dataReceived.addressList) {
        this.deliveryAddressList = dataReceived.addressList;
      }
    }
  }

  showMessage(str: string, type: string) {
    var _self = this;
    _self.msgs = [];
    _self.msgs.push({ severity: type, summary: str, detail: '' });
    setTimeout(function () {
      _self.clear();
    }, 10000);
  }

  clear() {
    this.msgs = [];
  }

  updateUSAmount(event, rowIndex) {
    this.lsMerchandise[rowIndex].PriceDeclared = event.target.value;
  }

  clearSuccessMessage() {
    this.updateSuccess = false;
    // const serviceActives = this.lsService.filter((service: any) => service.status == '1').map(service => service.serviceId);
    // const classificationActives = this.classifications.filter((item: any) => item.status == '1').map(item => item.classificationId);
    this.setFormDefault([], []);
  }
}


export class OrderConsignmentModel {
  WarehouseStartedId: string | number;
  WarehouseEndId: string | number;
  lsService: any[];
  lsClassification: any[];
  lsMerchandise: MerchandiseModel[];
  DeliveryAddressId: number;
  shippingType: string;
}

class MerchandiseModel {
  MerchandiseCode?: string;
  PriceDeclared?: number;
  Description?: string;

}
