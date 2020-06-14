import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ProdCategory, cart } from '../shared/model/models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  productCat: ProdCategory[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductCategories().subscribe(
      res => {
        res.forEach(t => {
          let cat = new ProdCategory();
          cat.id = t.id;
          cat.name = t.name;
          this.productCat.push(cat);
        })
      }
    )
  }

}
