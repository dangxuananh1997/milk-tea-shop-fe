import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPackageAddComponent } from './coupon-package-add.component';

describe('CouponPackageAddComponent', () => {
  let component: CouponPackageAddComponent;
  let fixture: ComponentFixture<CouponPackageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPackageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
