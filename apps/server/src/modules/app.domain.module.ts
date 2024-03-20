import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { ProfileDomainModule } from './profile/domain'

import { CategoryDomainModule } from './category/domain'

import { ProductDomainModule } from './product/domain'

import { CartDomainModule } from './cart/domain'

import { CartItemDomainModule } from './cartItem/domain'

import { OrderDomainModule } from './order/domain'

import { OrderItemDomainModule } from './orderItem/domain'

import { AddressDomainModule } from './address/domain'

import { PaymentDomainModule } from './payment/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    ProfileDomainModule,

    CategoryDomainModule,

    ProductDomainModule,

    CartDomainModule,

    CartItemDomainModule,

    OrderDomainModule,

    OrderItemDomainModule,

    AddressDomainModule,

    PaymentDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
