import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private route: Router
  ) {}

  registerForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
  });

  onSubmit() {
    const user = new User(
      this.registerForm.value.name ?? '',
      this.registerForm.value.email ?? '',
      this.registerForm.value.password ?? ''
    );

    this.userService.createUser(user).subscribe({
      next: () => {
        this.authService.persistLoggedUser(user);
        this.route.navigate(['/home']);
      },
    });
  }
}
