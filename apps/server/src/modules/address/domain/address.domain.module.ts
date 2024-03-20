import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AddressDomainFacade } from './address.domain.facade'
import { Address } from './address.model'

@Module({
  imports: [TypeOrmModule.forFeature([Address]), DatabaseHelperModule],
  providers: [AddressDomainFacade, AddressDomainFacade],
  exports: [AddressDomainFacade],
})
export class AddressDomainModule {}
