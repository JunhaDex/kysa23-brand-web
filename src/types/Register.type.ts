export interface Register {
  email: string
  name: string
  dob: string
  sex: 'm' | 'f'
  contact: string
  geo: string
  isMember: boolean
  joins: number[]
}
