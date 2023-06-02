import { IsString, IsNotEmpty } from "class-validator";

export class CreateCategoryProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}