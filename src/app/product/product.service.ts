import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://gorana.onrender.com/products/?fbclid=IwAR2SvR2eqL7jCb06pjTPQ1QQcUXcO11m2c4flpelP5wT3vfWQ0cCBoMLSFw';

 private apiUrl_page2 = "https://gorana.onrender.com/products/?fbclid=IwAR2SvR2eqL7jCb06pjTPQ1QQcUXcO11m2c4flpelP5wT3vfWQ0cCBoMLSFw&page=2";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/products`);
  } 

  getfeatureProducts() {
    return this.http.get(this.apiUrl_page2);
  }

  getProductById(id : any){
    return this.http.get("http://127.0.0.1:1880/product/" + id);
  }

}
