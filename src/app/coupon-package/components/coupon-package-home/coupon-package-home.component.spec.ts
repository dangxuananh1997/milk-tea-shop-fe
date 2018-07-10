import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPackageHomeComponent } from './coupon-package-home.component';

describe('CouponPackageHomeComponent', () => {
  let component: CouponPackageHomeComponent;
  let fixture: ComponentFixture<CouponPackageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPackageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPackageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
