import { Component, OnInit } from '@angular/core';
import { cart, priceSummary } from '../services/products.interface';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  cartData: cart[] | any;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 10,
    delivery: 0,
    total: 0
  }
  results: any;
  productQuantity: number = 1;

  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadDetails()
  }

  handleQuantity(val: string) {
    this.productQuantity = this.cartData.quantity;
    if (this.productQuantity < 100 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  loadDetails(){
    const localCardString = localStorage.getItem('localCart');
    let totalPrice = 0;
    if (localCardString) {
      this.cartData = JSON.parse(localCardString);

      console.log('Giá trị từ localStorage:', this.cartData);
      this.cartData.forEach((item: { quantity: number, price: number }) => {
        if (item.quantity && item.price) {
          totalPrice += item.price * item.quantity;
        }
      });
        this.priceSummary.total = totalPrice;
      }
    }

  
}
