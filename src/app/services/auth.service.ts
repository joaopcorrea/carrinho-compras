import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: User | undefined = localStorage.getItem('loggedUser')
    ? JSON.parse(localStorage.getItem('loggedUser') ?? '')
    : undefined;

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot) {
    // Escrevemos uma função que retorne verdadeiro ou falso.
    // Retornando verdadeiro, a rota pode ser acessada.
    // Retornando falso, não.

    if (!this.loggedUser) {
      this.router.navigate(['/login']);
    }
  }

  private persistLoggedUser(user: User) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  login(email: string, password: string): User | undefined {
    this.http.get('http://localhost:3000/users').subscribe({
      next: (users) => {
        const user = (users as User[]).find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          this.persistLoggedUser(user);
        }
      },
    });

    return this.loggedUser;
  }

  logoff(): boolean {
    return true;
  }
}
