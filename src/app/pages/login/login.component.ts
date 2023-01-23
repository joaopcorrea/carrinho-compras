import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    if (!this.loginForm.value.email || !this.loginForm.value.senha) {
      alert('Digite o e-mail e a senha');
      return;
    }

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.senha)
      .subscribe({
        next: (users) => {
          const user = (users as User[]).find(
            (u) =>
              u.email === this.loginForm.value.email &&
              u.password === this.loginForm.value.senha
          );

          if (user) {
            this.authService.persistLoggedUser(user);
            this.route.navigate(['/home']);
          } else {
            alert('Credenciais inválidas');
          }
        },
      });
  }
}
