import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = './assets/data.json';
  subTotal = new Subject<number[]>();
  total = 0;
  quantity = 0;
  
  constructor(private http: HttpClient) {
  }
  getProductData() {
    return this.http.get(this.url).pipe(map(data => data['products']));
  }

  getDeliveryDetailData() {
    return this.http.get(this.url).pipe(map(data => data['pincode']));
  }

  addToSubtotal(value, quantity) {
    this.total += value;
    this.quantity += quantity;
    this.subTotal.next([this.total, this.quantity]);

  }
  getSubtotal(){
    return this.subTotal.asObservable();
  }
}
