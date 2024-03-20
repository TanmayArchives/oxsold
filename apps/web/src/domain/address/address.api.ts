import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Address } from './address.model'

export class AddressApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Address>,
  ): Promise<Address[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/addresss${buildOptions}`)
  }

  static findOne(
    addressId: string,
    queryOptions?: ApiHelper.QueryOptions<Address>,
  ): Promise<Address> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/addresss/${addressId}${buildOptions}`)
  }

  static createOne(values: Partial<Address>): Promise<Address> {
    return HttpService.api.post(`/v1/addresss`, values)
  }

  static updateOne(
    addressId: string,
    values: Partial<Address>,
  ): Promise<Address> {
    return HttpService.api.patch(`/v1/addresss/${addressId}`, values)
  }

  static deleteOne(addressId: string): Promise<void> {
    return HttpService.api.delete(`/v1/addresss/${addressId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Address>,
  ): Promise<Address[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/addresss${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Address>,
  ): Promise<Address> {
    return HttpService.api.post(`/v1/users/user/${userId}/addresss`, values)
  }
}
