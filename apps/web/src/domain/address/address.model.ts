import { User } from '../user'

export class Address {
  id: string

  street: string

  city: string

  state: string

  zipCode: string

  country: string

  addressType: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
