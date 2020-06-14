import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './shared/product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'productlist', component: ProductListComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: '', component: WelcomeComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
