import axios from 'axios';
import type { Register } from '@/types/Register.type';

export class RegisterService {
  private readonly register;
  private readonly jwt;

  constructor(token: string) {
    this.register = axios.create({
      baseURL: 'https://api.kysa.page/',
    });
    this.jwt = token;
    this.register.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  async submitRegister(register: Register) {
    await this.register.post('register', { ...register });
  }

  async sendEmail() {
    await this.register.post('register/send')
  }
}
