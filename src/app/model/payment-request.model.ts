export class PaymentRequestModel {
  serviceGroupId?: string;
  paymentRequestId?: number;
  paymentRequestCode?: string;
  paymentRequestDate?: Date;
  userId?: number;
  amountRequest?: number;
  totalFee?: number;
  totalAmount?: number;
  exchangeRate?: number;
  type?: string;
  status?: string;
  statusDisplay?: string;
  serviceId?: number;
  lsService?: PaymentServiceModel[];
  couponCode?: string;
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
  serviceId: number;
  serviceName: string;
  display: string;
  shortDisplay: string;
  description: string;
  groupType: string;
  isOption: string;
  isDefault: string;
  isInternal: string;
  locationDisplay: string;
  feeType: string;
  status: string;
  ord: number;
  amount: number;
  isChecked: boolean;
}

