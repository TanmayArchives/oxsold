import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { ProfileApi } from './profile/profile.api'

import { CategoryApi } from './category/category.api'

import { ProductApi } from './product/product.api'

import { CartApi } from './cart/cart.api'

import { CartItemApi } from './cartItem/cartItem.api'

import { OrderApi } from './order/order.api'

import { OrderItemApi } from './orderItem/orderItem.api'

import { AddressApi } from './address/address.api'

import { PaymentApi } from './payment/payment.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Profile extends ProfileApi {}

  export class Category extends CategoryApi {}

  export class Product extends ProductApi {}

  export class Cart extends CartApi {}

  export class CartItem extends CartItemApi {}

  export class Order extends OrderApi {}

  export class OrderItem extends OrderItemApi {}

  export class Address extends AddressApi {}

  export class Payment extends PaymentApi {}
}
