import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() product;
  @Input() isGift = false;
  description: string[];
  constructor() { }

  ngOnInit() {

  }

}
