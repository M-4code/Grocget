import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './shared/product/product.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'productlist', component: ProductListComponent
  },
  {
    path: 'product', component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
