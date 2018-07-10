import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPackageEditComponent } from './coupon-package-edit.component';

describe('CouponPackageEditComponent', () => {
  let component: CouponPackageEditComponent;
  let fixture: ComponentFixture<CouponPackageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPackageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPackageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
