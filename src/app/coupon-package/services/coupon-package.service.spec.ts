import { TestBed, inject } from '@angular/core/testing';

import { CouponPackageService } from './coupon-package.service';

describe('CouponPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouponPackageService]
    });
  });

  it('should be created', inject([CouponPackageService], (service: CouponPackageService) => {
    expect(service).toBeTruthy();
  }));
});
