import { IsString, IsInt, IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    categoryId: number;

    @IsNotEmpty()
    @IsInt()
    qty: number;

    @IsNotEmpty()
    @IsInt()
    price: number;
}