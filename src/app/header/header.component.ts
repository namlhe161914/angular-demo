import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../services/products.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit{
  keyword = 'name';
  products: Products[] | undefined;

  public cartCount: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data; 
      // console.log(this.products);
    });

    this.cartService.getCount().subscribe(count => {
      this.cartCount = count;
    });
  }
    selectEvent(item: any) {
    // do something with selected item
    window.location.href = `/product/${item._id}`;

  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }
  
}

