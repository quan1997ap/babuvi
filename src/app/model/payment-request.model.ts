export class PaymentRequestModel {
  PaymentRequestId: number;
  PaymentRequestCode: string;
  PaymentRequestDate: Date;
  UserId: number;
  AmountRequest: number;
  TotalFee: number;
  TotalAmount: number;
  ExchangeRate: number;
  Type: string;
  Status: string;
  StatusDisplay: string;
  ServiceId: number;
}

export class PaymentRequestSearchModel {
  PaymentRequestCode?: string;
  StartDate?: Date;
  EndDate?: Date;
  Type?: string;
  Status?: string;
  UserCode?: string;
}

export class ServiceGroupPaymentRequestModel {
  description: null;
  groupName: string;
  groupType: string;
  isDefault: string;
  isInternal: string;
  serviceGroupId: number;
}

export class PaymentServiceModel {
  serviceid: number;
  servicename: string;
  display: string;
  shortdisplay: string;
  description: string;
  grouptype: string;
  isoption: string;
  isdefault: string;
  isinternal: string;
  locationdisplay: string;
  feetype: string;
  status: string;
  ord: number;
  amount: number;
  ischecked: boolean;
}
