import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPackageItemComponent } from './coupon-package-item.component';

describe('CouponPackageItemComponent', () => {
  let component: CouponPackageItemComponent;
  let fixture: ComponentFixture<CouponPackageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPackageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
