import { Order } from '../order'

import { Product } from '../product'

export class OrderItem {
  id: string

  priceAtPurchase: number

  quantity: number

  orderId: string

  order?: Order

  productId: string

  product?: Product

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
