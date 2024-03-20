import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AddressDomainFacade } from '@server/modules/address/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AddressApplicationEvent } from './address.application.event'
import { AddressCreateDto } from './address.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class AddressByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private addressDomainFacade: AddressDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/addresss')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.addressDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/addresss')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: AddressCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.addressDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AddressApplicationEvent.AddressCreated.Payload>(
      AddressApplicationEvent.AddressCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
