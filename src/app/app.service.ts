import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter , map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = './assets/data.json';
  constructor(private http: HttpClient) {
  }
  getProductData() {
    return this.http.get(this.url).pipe(map(data => data['products']));
  }

  getDeliveryDetailData() {
    return this.http.get(this.url).pipe(map(data => data['pincode']));
  }

}
