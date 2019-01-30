import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './Model/product';
import { Pincode } from './Model/delivery-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestShoppingSite';

  constructor(private appService: AppService) {
    this.appService.getDeliveryDetailData().subscribe( (data: Pincode) => {
      console.log(data, data['560066']);
    });
  }

}

