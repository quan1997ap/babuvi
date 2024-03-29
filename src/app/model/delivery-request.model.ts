import { Shipment } from "./shipment.model";

export class DeliveryRequest {
    customerName;
    customerPhone;
    customerWard;
    customerDistrict;
    customerCity;
    customerCountry;
    totalWeight;
    customerAddress;
    expWarehousePhone;
    expWarehouseName;
    deliveryRequestTypeDisplay;
    deliveryRequestDate;
    expDate;
    deliveryRequestId;
    deliveryRequestCode;
    type;
    typeDisplay;
    contactName;
    contactPhone;
    address;
    country;
    countryDisplay;
    city;
    cityDisplay;
    district;
    districtDisplay;
    ward;
    wardDisplay;
    description;
    vehicleName;
    vehiclePhone;
    vehicleAddress;
    userId;
    userCode;
    createdDate;
    createdUser;
    changeDate;
    changeUserId;
    warehouseId;
    warehouseName;
    status;
    statusDisplay;
    missingAmount;
    walletAmount;
    warehouseExp;
    needTopupAmount;
    totalPackage;
    paymentShipType;
    paymentShipTypeDisplay;
    shipment: Shipment[] = [new Shipment()];
    lsParentDetail: any[];
    lsDetail: DeliveryRequestDetail[] = [new DeliveryRequestDetail()];
    checkMultileDeliveryRequest;
}

export class DeliveryRequestDetail {
    deliveryRequestCode;
    deliveryRequestId;
    deliveryRequestDetailId;
    merchandiseId;
    parentId;
    merchandiseCode;
    merchandiseWarehouseId;
    shelfPosition;
    netWeight;
    warehouseId;
    chargedWeight;
    paymentWeight;
    length;
    width;
    height;
    description;
    orderId;
    orderCode;
    userCode;
    status
}