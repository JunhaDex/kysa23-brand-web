import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import type { ConfirmationResult } from 'firebase/auth';
import { getApp } from '@/providers/Firebase.provider';

export const recaptchaCid = 'recap-comp';

export class AuthService {
  private readonly auth;
  private smsResult: ConfirmationResult | undefined;

  constructor() {
    const app = getApp();
    this.auth = getAuth(app);
    this.auth.useDeviceLanguage();
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        recaptchaCid,
        { size: 'invisible' },
        this.auth
      );
      window.recaptchaVerifier
        .verify()
        .then((wid: any) => {
          console.log({ wid });
        })
        .catch(() => {
          throw new Error('reCaptcha Initiation');
        });
    }
  }

  async signInPhone(phone: string) {
    this.smsResult = await signInWithPhoneNumber(this.auth, phone, window.recaptchaVerifier);
  }

  async confirmCode(code: string) {
    if (this.smsResult) {
      const res = await this.smsResult.confirm(code);
      console.log(res);
    }
  }
}
