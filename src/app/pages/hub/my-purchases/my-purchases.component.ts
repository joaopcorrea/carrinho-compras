import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import CartItems from 'src/app/models/cart-items.model';
import Sale from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.scss']
})
export class MyPurchasesComponent implements OnInit {
  items: CartItems[] = [];
  loggedId: number = 0;

  constructor(private saleService: SaleService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loggedId = this.authService.getLoggedUser()!.id;

    this.saleService.getSales().subscribe({
      next: (sales) => {
        (sales as Sale[]).forEach((sale) => {
          if (sale.cart.id === this.loggedId) {
            this.items.push(...sale.cart.cartItems);
          }
        });
      }
    })
  }
}
