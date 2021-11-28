import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesProductsComponent } from './features-products.component';

describe('FeaturesProductsComponent', () => {
  let component: FeaturesProductsComponent;
  let fixture: ComponentFixture<FeaturesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
