import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Pincode } from '../../Model/delivery-info';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  delivery: Pincode;
  subtotal = 0;
  total = 0;
  discount = 0;
  totalItem = 0;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getSubtotal().subscribe(data => {
      this.subtotal = data[0];
      if (this.subtotal === 0) {
        this.total = 0;
        this.discount = 0;
      }
      else {
        this.discount = 1000;
        this.total = this.subtotal - this.discount;
      }
      this.totalItem = data[1];
    })
  }

}
