import { Component, OnInit, ɵisSubscribable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  product: any; // Để lưu trữ thông tin sản phẩm
  imageList : any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  id: any ; // Để lưu trữ ID sản phẩm

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('_id')
    })
    this.getProductById(this.id);
  }

  getProductById(id : any){
    this.productService.getProductById(id).subscribe((res : any) =>{
      this.product = res;
      this.imageList = res.images.slice(1, 6);
      console.log(this.imageList);
    })
  }
}
