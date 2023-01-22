import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { HubComponent } from './hub.component';
import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from '../hub/cart/cart.component';
import { MySalesComponent } from './my-sales/my-sales.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';


@NgModule({
  declarations: [
    HubComponent,
    HomeComponent,
    ProductListComponent,
    MyProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    MySalesComponent,
    MyPurchasesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class HubModule { }
