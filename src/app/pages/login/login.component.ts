import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: '',
    senha: '',
  });

  onSubmit() {
    const user = this.authService.login(
      this.loginForm.value.email ?? '',
      this.loginForm.value.senha ?? ''
    );

    if (user) {
      this.route.navigate(["/home"]);
    }
    else {
      console.log('Credenciais inválidas');
    }
  }
}
