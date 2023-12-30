import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../services/products.interface';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Products[] | undefined;
  feature_products: any[] | undefined;
  pId: any;
  productInfo: any | undefined;

  product: any | Products;
  productQuantity: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      // console.log(this.products);
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

  async getProductById(id: any) {
    this.productService.getProductById(id).subscribe((res: any) => {
      this.productInfo = res;
    })
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  showSuccessPopup: boolean = false;

  addToCart(val: string) {
    // gan gia tri cho product (id, name,...)
    this.productService.getProductById(val).subscribe((res: any) => {
      this.product = res;
    })
    // thay doi gia tri quantity
    if (this.product) {
      this.product.quantity = this.productQuantity;

      const localCartString = localStorage.getItem('localCart');

      if (localCartString) {
        const localCart = JSON.parse(localCartString);
        const existingProduct = localCart.find((item: { name: string }) => item.name === this.product.name);

        if (existingProduct) {
          existingProduct.quantity += this.productQuantity;
        } else {
          localCart.push(this.product);
        }

        localStorage.setItem('localCart', JSON.stringify(localCart));

        this.showSuccessPopup = true;
        setTimeout(() => {
          this.showSuccessPopup = false;
        }, 1000);
      } else {
        localStorage.setItem('localCart', JSON.stringify([this.product]));

        this.showSuccessPopup = true;
        setTimeout(() => {
          this.showSuccessPopup = false;
        }, 1000);
      }

    }

    
  }


}
