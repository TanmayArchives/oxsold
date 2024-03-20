import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationProfileSubscriber } from './subscribers/notification.profile.subscriber'

import { NotificationCategorySubscriber } from './subscribers/notification.category.subscriber'

import { NotificationProductSubscriber } from './subscribers/notification.product.subscriber'

import { NotificationCartSubscriber } from './subscribers/notification.cart.subscriber'

import { NotificationCartItemSubscriber } from './subscribers/notification.cartItem.subscriber'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationOrderItemSubscriber } from './subscribers/notification.orderItem.subscriber'

import { NotificationAddressSubscriber } from './subscribers/notification.address.subscriber'

import { NotificationPaymentSubscriber } from './subscribers/notification.payment.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationProfileSubscriber,

    NotificationCategorySubscriber,

    NotificationProductSubscriber,

    NotificationCartSubscriber,

    NotificationCartItemSubscriber,

    NotificationOrderSubscriber,

    NotificationOrderItemSubscriber,

    NotificationAddressSubscriber,

    NotificationPaymentSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
