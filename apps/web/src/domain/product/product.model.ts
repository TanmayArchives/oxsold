import { Category } from '../category'

import { CartItem } from '../cartItem'

import { OrderItem } from '../orderItem'

export class Product {
  id: string

  name: string

  description?: string

  price: number

  stockQuantity: number

  categoryId: string

  category?: Category

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  cartItems?: CartItem[]

  orderItems?: OrderItem[]
}
