import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OrderItemCreateDto {
  @IsNumber()
  @IsNotEmpty()
  priceAtPurchase: number

  @IsNumber()
  @IsNotEmpty()
  quantity: number

  @IsString()
  @IsOptional()
  orderId?: string

  @IsString()
  @IsOptional()
  productId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class OrderItemUpdateDto {
  @IsNumber()
  @IsOptional()
  priceAtPurchase?: number

  @IsNumber()
  @IsOptional()
  quantity?: number

  @IsString()
  @IsOptional()
  orderId?: string

  @IsString()
  @IsOptional()
  productId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
