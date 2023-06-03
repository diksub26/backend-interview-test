import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateCategoryProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}