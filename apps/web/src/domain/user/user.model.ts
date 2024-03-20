import { Notification } from '../notification'

import { Profile } from '../profile'

import { Cart } from '../cart'

import { Order } from '../order'

import { Address } from '../address'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  profiles?: Profile[]

  carts?: Cart[]

  orders?: Order[]

  addresss?: Address[]
}
