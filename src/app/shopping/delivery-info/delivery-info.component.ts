import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Pincode } from '../../Model/delivery-info';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {
  delivery: Pincode;
  deliveryService = '';
  cod: string = '';
  estimatedDays = '';
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getDeliveryDetailData().subscribe((data: Pincode) => {
      this.delivery = data['560066'];
      if (this.delivery) {
        if (this.delivery.deliveryPrice === 0) {
          this.deliveryService = 'Free Delivery';
        } else {
          this.deliveryService = 'Delivery charge is $' + this.delivery.deliveryPrice ;
        }
        if(this.delivery.cashOnDelivery){
          this.cod = 'Cash On delivery'
        } else {
          this.cod = 'Cash On Delivery not available'
        }
        if(this.delivery.estimatedDays){
          this.estimatedDays =  `Estimated delivery time is ${this.delivery.estimatedDays.min} - ${this.delivery.estimatedDays.max} days`;
        }
      }
    });
  }

}
