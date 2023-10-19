import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from '../product/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Products[] | undefined;
  feature_products : any[] | undefined;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.results.slice(0, 9); // Lấy 6 phần tử đầu tiên
      console.log(this.products);
    });

    this.productService.getfeatureProducts().subscribe((data: any) => {
      this.feature_products = data.results.slice(0, 6); // Lấy 6 phần tử đầu tiên
      // console.log(this.feature_products);
    });
  }

}
