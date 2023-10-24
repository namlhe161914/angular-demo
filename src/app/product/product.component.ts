import { Component, OnInit } from '@angular/core';
import { ProductService } from '../data/product.service';
import { Products } from '../data/products.interface';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Products[] | undefined;
  feature_products : any[] | undefined;
  pId : any;
  productInfo: any | undefined;


  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data; // Lấy 6 phần tử đầu tiên
      console.log(this.products);
    });

    this.productService.getfeatureProducts().subscribe((data: any) => {
      this.feature_products = data.results.slice(0, 6); // Lấy 6 phần tử đầu tiên
      // console.log(this.feature_products);
    });

    
  }

  async handleClick(productId: any) {
    if (productId !== null) {
      this.pId = productId;
      this.getProductById(this.pId);
    }
    
    
  }

  async getProductById(id : any){
    this.productService.getProductById(id).subscribe((res : any) =>{
      this.productInfo = res;
    })
  }
    

}
