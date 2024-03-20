import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Address, AddressDomainFacade } from '@server/modules/address/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AddressApplicationEvent } from './address.application.event'
import { AddressCreateDto, AddressUpdateDto } from './address.dto'

@Controller('/v1/addresss')
export class AddressController {
  constructor(
    private eventService: EventService,
    private addressDomainFacade: AddressDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.addressDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: AddressCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.addressDomainFacade.create(body)

    await this.eventService.emit<AddressApplicationEvent.AddressCreated.Payload>(
      AddressApplicationEvent.AddressCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:addressId')
  async findOne(
    @Param('addressId') addressId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.addressDomainFacade.findOneByIdOrFail(
      addressId,
      queryOptions,
    )

    return item
  }

  @Patch('/:addressId')
  async update(
    @Param('addressId') addressId: string,
    @Body() body: AddressUpdateDto,
  ) {
    const item = await this.addressDomainFacade.findOneByIdOrFail(addressId)

    const itemUpdated = await this.addressDomainFacade.update(
      item,
      body as Partial<Address>,
    )
    return itemUpdated
  }

  @Delete('/:addressId')
  async delete(@Param('addressId') addressId: string) {
    const item = await this.addressDomainFacade.findOneByIdOrFail(addressId)

    await this.addressDomainFacade.delete(item)

    return item
  }
}
