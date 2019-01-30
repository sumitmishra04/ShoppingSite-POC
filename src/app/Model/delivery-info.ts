export interface Pincode {
    pincode: DeliveryDetail;
}
export interface DeliveryDetail {
    deliveryPrice: number;
    cashOnDelivery: boolean;
    estimatedDays: DaysRange;
    isFree: boolean;
}
export interface DaysRange {
    min: number;
    max: number;
}
