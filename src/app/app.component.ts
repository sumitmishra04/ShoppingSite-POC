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
  }

}

