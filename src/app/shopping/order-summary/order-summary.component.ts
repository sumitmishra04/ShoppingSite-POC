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
  constructor(private appService: AppService) { }

  ngOnInit() {
   
  }

}
