import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProductsComponent } from './your-products.component';

describe('YourProductsComponent', () => {
  let component: YourProductsComponent;
  let fixture: ComponentFixture<YourProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
