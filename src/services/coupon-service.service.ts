import { Injectable } from '@angular/core';
import { CouponDataResponse } from '../types/couponDataTestType';
import couponData from '../data/couponDataTest.json';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private data: CouponDataResponse;

  constructor() {
    this.data = couponData as CouponDataResponse;
  }

  public getCoupons() {
    return this.data.data;
  }

  public getCouponById(id: string) {
    return this.data.data.find(coupon => coupon.id === id);
  }
}