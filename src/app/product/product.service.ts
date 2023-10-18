import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://gorana.onrender.com/products/?fbclid=IwAR2SvR2eqL7jCb06pjTPQ1QQcUXcO11m2c4flpelP5wT3vfWQ0cCBoMLSFw';
 // private apiUrl = 'http://127.0.0.1:1880/test';

 private apiUrl_page2 = "https://gorana.onrender.com/products/?fbclid=IwAR2SvR2eqL7jCb06pjTPQ1QQcUXcO11m2c4flpelP5wT3vfWQ0cCBoMLSFw&page=2";
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  getfeatureProducts() {
    return this.http.get(this.apiUrl_page2);
  }
}
