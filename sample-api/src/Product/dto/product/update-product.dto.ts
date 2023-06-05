import { IsInt, IsOptional, IsString } from 'class-validator';
export class UpdateProductDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsInt()
    categoryId: number;

    @IsOptional()
    @IsInt()
    qty: number;

    @IsOptional()
    @IsInt()
    price: number;
}