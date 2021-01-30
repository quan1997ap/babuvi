export class PaymentRequestModel{
    PaymentRequestId: number;
    PaymentRequestCode: string;
    PaymentRequestDate:  Date;
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

export class PaymentRequestSearchModel{
    PaymentRequestCode?: string;
	StartDate?: Date;
	EndDate?: Date;
	Type?: string;
	Status?: string;
	UserCode?: string;

}