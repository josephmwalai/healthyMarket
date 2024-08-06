import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { LayoutComponent } from './components/admin/layout/layout.component';
import { CartComponent } from './components/admin/cart/cart.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { OrderComponent } from './components/admin/order/order.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { LandingComponent } from './components/website/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'HealthyMarket',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
