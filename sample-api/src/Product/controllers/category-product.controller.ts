import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateCategoryProductDto } from '../dto/category-product/create-category-product.dto';
import { CategoryProductService } from '../service/category-product.service';

@Controller('category-product')
export class CategoryProductController {
    constructor(
        private readonly categoryProductService: CategoryProductService
    ){}

    @Get(":id")
    getById(@Param("id") id: string) {

    }

    @Post()
    create(@Body() createCategoryProductDto : CreateCategoryProductDto) {
        return this.categoryProductService.create(createCategoryProductDto)
    }
}
