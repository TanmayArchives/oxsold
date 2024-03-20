import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Profile as ProfileModel } from './profile/profile.model'

import { Category as CategoryModel } from './category/category.model'

import { Product as ProductModel } from './product/product.model'

import { Cart as CartModel } from './cart/cart.model'

import { CartItem as CartItemModel } from './cartItem/cartItem.model'

import { Order as OrderModel } from './order/order.model'

import { OrderItem as OrderItemModel } from './orderItem/orderItem.model'

import { Address as AddressModel } from './address/address.model'

import { Payment as PaymentModel } from './payment/payment.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Profile extends ProfileModel {}

  export class Category extends CategoryModel {}

  export class Product extends ProductModel {}

  export class Cart extends CartModel {}

  export class CartItem extends CartItemModel {}

  export class Order extends OrderModel {}

  export class OrderItem extends OrderItemModel {}

  export class Address extends AddressModel {}

  export class Payment extends PaymentModel {}
}
