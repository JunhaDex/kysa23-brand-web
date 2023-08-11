import axios from 'axios';
import type { Register } from '@/types/Register.type';

export class RegisterService {
  private readonly register;

  constructor() {
    this.register = axios.create({
      baseURL: 'https://api.kysa.page/',
    });
  }

  async getCount() {
    const res = await this.register.get('register/stats');
    return res.data.count;
  }
}
