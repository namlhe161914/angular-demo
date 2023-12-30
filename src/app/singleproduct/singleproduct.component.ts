import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../services/products.interface';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],


})
export class SingleproductComponent implements OnInit {
  product: any | Products; // Để lưu trữ thông tin sản phẩm
  imageList: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  id: any; // Để lưu trữ ID sản phẩm
  productQuantity: number = 1;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('_id')
    })
    this.getProductById(this.id);
  }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((res: any) => {
      this.product = res;
      this.imageList = res.images.slice(1, 6);
      console.log(this.imageList);
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

  addToCart() {
    if (this.product) {
      this.product.quantity = this.productQuantity;

      if (!localStorage.getItem('user')) {
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


}
