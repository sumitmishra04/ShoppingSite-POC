import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() product;
  @Input() isGift = false;
  quantity = 0;
  description: string[];
  subtotal = 0;
  minusUrl = '../../../../assets/Images/minus.png';
  constructor(private appService: AppService) { }

  ngOnInit() {

  }

  increment() {
    this.quantity += 1;
    this.subtotal = this.quantity * this.product.price;
    this.appService.addToSubtotal(this.product.price, 1);
    this.setMinusActive();
  }
  decrement() {
    if (this.quantity) {
      this.quantity -= 1;
      this.subtotal = this.quantity * this.product.price;
      this.appService.addToSubtotal(-this.product.price, -1);
      this.setMinusActive();

    }
  }
  setMinusActive() {
    if (this.quantity) {
      this.minusUrl = this.minusUrl.replace('minus.png', 'minus-active.png');
    } else {
      this.minusUrl = this.minusUrl.replace('minus-active.png', 'minus.png');
    }
  }

}
