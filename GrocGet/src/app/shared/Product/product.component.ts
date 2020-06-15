import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../model/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() product: product;
  @Output() productClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  handleProduct(){
    this.productClick.emit(this.product.name);
  }
}
