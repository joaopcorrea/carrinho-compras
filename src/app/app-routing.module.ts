import { MyPurchasesComponent } from './pages/hub/my-purchases/my-purchases.component';
import { MySalesComponent } from './pages/hub/my-sales/my-sales.component';
import { ProductDetailsComponent } from './pages/hub/product-details/product-details.component';
import { MyProductsComponent } from './pages/hub/my-products/my-products.component';
import { ProductListComponent } from './pages/hub/product-list/product-list.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/hub/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HubComponent } from './pages/hub/hub.component';
import { CartComponent } from './pages/hub/cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'hub', component: HubComponent, canActivate: [AuthService], children: [
    { path: 'home', component: HomeComponent, canActivate: [AuthService] },
    { path: 'cart', component: CartComponent, canActivate: [AuthService] },
    { path: 'products', component: ProductListComponent, canActivate: [AuthService] },
    { path: 'product/:id', component: ProductDetailsComponent, canActivate: [AuthService] },
    { path: 'my-products', component: MyProductsComponent, canActivate: [AuthService] },
    { path: 'my-purchases', component: MyPurchasesComponent, canActivate: [AuthService] },
    { path: 'my-sales', component: MySalesComponent, canActivate: [AuthService] },
  ] },
  { path: '**', redirectTo: 'hub/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
