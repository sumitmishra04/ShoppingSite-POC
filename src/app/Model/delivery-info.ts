export interface Pincode {
    pincode: DeliveryDetail;
}
export interface DeliveryDetail {
    deliveryPrice: number;
    cashOnDelivery: boolean;
    estimatedDays: DaysRange;
}
export interface DaysRange {
    min: number;
    max: number;
}
