import { Component, OnInit } from '@angular/core';
import { ProductService } from '../data/product.service';
import { Products } from '../data/products.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit{
  keyword = 'name';
  products: Products[] | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data; // Lấy 6 phần tử đầu tiên
      // console.log(this.products);
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

