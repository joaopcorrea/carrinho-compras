import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
