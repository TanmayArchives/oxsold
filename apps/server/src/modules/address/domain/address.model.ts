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

import { User } from '../../../modules/user/domain'

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  street: string

  @Column({})
  city: string

  @Column({})
  state: string

  @Column({})
  zipCode: string

  @Column({})
  country: string

  @Column({})
  addressType: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.addresss)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
