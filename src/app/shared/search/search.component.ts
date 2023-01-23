import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    this.router.navigateByUrl(
      '/hub/products?search=' + this.searchValue.trim()
    );
  }
}
