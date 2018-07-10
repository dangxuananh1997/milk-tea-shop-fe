import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPackageSearchComponent } from './coupon-package-search.component';

describe('CouponPackageSearchComponent', () => {
  let component: CouponPackageSearchComponent;
  let fixture: ComponentFixture<CouponPackageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPackageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPackageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
