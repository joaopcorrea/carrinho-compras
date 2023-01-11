import { RouterModule } from '@angular/router';
import { HubComponent } from './hub.component';
import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { YourProductsComponent } from './your-products/your-products.component';



@NgModule({
  declarations: [
    HubComponent,
    HomeComponent,
    ProductListComponent,
    YourProductsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class HubModule { }
