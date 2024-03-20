import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Category } from '../../../modules/category/domain'

import { CartItem } from '../../../modules/cartItem/domain'

import { OrderItem } from '../../../modules/orderItem/domain'

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({ nullable: true })
  description?: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @ColumnNumeric({ type: 'numeric' })
  stockQuantity: number

  @Column({})
  categoryId: string

  @ManyToOne(() => Category, parent => parent.products)
  @JoinColumn({ name: 'categoryId' })
  category?: Category

  @OneToMany(() => CartItem, child => child.product)
  cartItems?: CartItem[]

  @OneToMany(() => OrderItem, child => child.product)
  orderItems?: OrderItem[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
