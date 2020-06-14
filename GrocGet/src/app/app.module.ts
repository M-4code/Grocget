import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { sharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    sharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
