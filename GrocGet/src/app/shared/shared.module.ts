import { CommonModule } from '@angular/common'
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

@NgModule({
declarations:[ProductComponent],
imports:[CommonModule],
providers:[],
exports: [ProductComponent,
    CommonModule, FormsModule]
})

export class sharedModule{

}