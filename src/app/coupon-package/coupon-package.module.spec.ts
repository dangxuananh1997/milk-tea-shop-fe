import { CouponPackageModule } from './coupon-package.module';

describe('CouponPackageModule', () => {
  let couponPackageModule: CouponPackageModule;

  beforeEach(() => {
    couponPackageModule = new CouponPackageModule();
  });

  it('should create an instance', () => {
    expect(couponPackageModule).toBeTruthy();
  });
});
