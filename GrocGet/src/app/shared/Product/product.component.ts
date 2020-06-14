import { Component, OnInit } from '@angular/core';
import { product } from '../model/models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  product: product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct(1).subscribe(
      res => {
        this.product = new product();
        this.product.name = res.name;
        this.product.price = res.price;
        this.product.id = res.id;
        this.product.prodCatId = res.prodCatId;
      },
      err => {console.log(err)}
    )
  }

}
