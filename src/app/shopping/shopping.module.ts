import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping/shoppingList/shopping-list.component';
import { ShoppingItemComponent } from './shopping/shoppingList/shopping-item/shopping-item.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingItemComponent, DeliveryInfoComponent, OrderSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [ShoppingListComponent, ShoppingItemComponent, DeliveryInfoComponent, OrderSummaryComponent]
})
export class ShoppingModule { }
