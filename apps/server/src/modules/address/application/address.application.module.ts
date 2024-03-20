import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AddressDomainModule } from '../domain'
import { AddressController } from './address.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { AddressByUserController } from './addressByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, AddressDomainModule, UserDomainModule],
  controllers: [AddressController, AddressByUserController],
  providers: [],
})
export class AddressApplicationModule {}
