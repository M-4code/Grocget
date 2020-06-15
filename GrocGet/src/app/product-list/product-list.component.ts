import { Component, OnInit } from '@angular/core';
import { product } from '../shared/model/models';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  productList: product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
    this.productService.getProductList().subscribe(
      res => {
        res.forEach(r => {
          let productValue = new product();
          productValue.id = r.id;
          productValue.name = r.name;
          productValue.price = r.price;
          productValue.prodCatId = r.prodCatId;
          this.productList.push(productValue);
        });
      }
    )
  }

  handleProductClick(data) {
    console.log(data);
  }
}
