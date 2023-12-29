import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'http://127.0.0.1:1880/product/all';

 private apiUrl_page2 = "https://gorana.onrender.com/products/?fbclid=IwAR2SvR2eqL7jCb06pjTPQ1QQcUXcO11m2c4flpelP5wT3vfWQ0cCBoMLSFw&page=2";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}`);
  } 

  getfeatureProducts() {
    return this.http.get(this.apiUrl_page2);
  }

  getProductById(id : any){
    return this.http.get("http://127.0.0.1:1880/product/" + id);
  }

  localAddToCart(data: Products) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      // this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      // this.cartData.emit(cartData);
    }
  }

}
