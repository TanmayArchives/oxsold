import { User } from '../user'

import { OrderItem } from '../orderItem'

import { Payment } from '../payment'

export class Order {
  id: string

  totalPrice: number

  status: string

  orderDate: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  orderItems?: OrderItem[]

  payments?: Payment[]
}
