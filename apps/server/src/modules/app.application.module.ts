import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { ProfileApplicationModule } from './profile/application'

import { CategoryApplicationModule } from './category/application'

import { ProductApplicationModule } from './product/application'

import { CartApplicationModule } from './cart/application'

import { CartItemApplicationModule } from './cartItem/application'

import { OrderApplicationModule } from './order/application'

import { OrderItemApplicationModule } from './orderItem/application'

import { AddressApplicationModule } from './address/application'

import { PaymentApplicationModule } from './payment/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    ProfileApplicationModule,

    CategoryApplicationModule,

    ProductApplicationModule,

    CartApplicationModule,

    CartItemApplicationModule,

    OrderApplicationModule,

    OrderItemApplicationModule,

    AddressApplicationModule,

    PaymentApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
