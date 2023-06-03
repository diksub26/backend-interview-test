import { IsOptional } from 'class-validator'

export class FilterCategoryProductDto {
    @IsOptional()
    name: string
}