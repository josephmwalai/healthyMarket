import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/admin/login/login.component';
import { LayoutComponent } from './components/admin/layout/layout.component';
import { CartComponent } from './components/admin/cart/cart.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { OrderComponent } from './components/admin/order/order.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { LandingComponent } from './components/website/landing/landing.component';
import { CategoryProductsComponent } from './components/website/category-products/category-products.component';
import { CustomerCartComponent } from './components/website/customer-cart/customer-cart.component';
import { CheckoutComponent } from './components/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './components/website/customer-orders/customer-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    CartComponent,
    CategoriesComponent,
    CustomersComponent,
    OrderComponent,
    ProductsComponent,
    LandingComponent,
    CategoryProductsComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
