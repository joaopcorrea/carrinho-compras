import { HubModule } from './hub/hub.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PasswordRecoveryComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HubModule
  ]
})
export class PagesModule { }
