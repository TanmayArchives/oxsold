import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Product } from './product.model'

import { Category } from '../../category/domain'

@Injectable()
export class ProductDomainFacade {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Product>): Promise<Product> {
    return this.repository.save(values)
  }

  async update(item: Product, values: Partial<Product>): Promise<Product> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Product): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Product> = {},
  ): Promise<Product[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Product> = {},
  ): Promise<Product> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByCategory(
    item: Category,
    queryOptions: RequestHelper.QueryOptions<Product> = {},
  ): Promise<Product[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('category')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        categoryId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
