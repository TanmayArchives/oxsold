import { Product } from '../product'

export class Category {
  id: string

  name: string

  description?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  products?: Product[]
}
