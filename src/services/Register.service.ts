import { ref, set, get, child } from 'firebase/database'
import { getDB } from '@/providers/Firebase.provider'
import type { Register } from '@/types/Register.type'

export class RegisterService {
  private db

  constructor() {
    this.db = getDB()
  }

  async uploadRegister(register: Register) {
    await set(ref(this.db, `test/${register.email}`), register)
  }

  async getRegister(email: string) {
    const snapshot = await get(ref(this.db, `test/${email}`))
    if (snapshot.exists()) {
      console.log(snapshot.val())
    }
  }
}
