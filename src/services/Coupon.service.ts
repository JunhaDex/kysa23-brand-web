import axios from 'axios';

export class CouponService {
  private readonly coupon;

  constructor() {
    this.coupon = axios.create({ basetURL: 'https://api.kysa.page/' });
  }

  async searchCoupon(serial: string): Promise<{ code: string; rank: string }> {
    const res = await this.coupon.get(`/register/coupon/${serial}`);
    return res.data;
  }
}
