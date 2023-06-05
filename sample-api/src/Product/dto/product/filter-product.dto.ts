import { IsOptional } from 'class-validator'

export class FilterProductDto {
    @IsOptional()
    name: string

    @IsOptional()
    price: string
}