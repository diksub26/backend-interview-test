import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/product/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get(":id")
    getById(@Param("id") id: string) {

    }

    @Post()
    create(@Body() createProductDto : CreateProductDto) {
        return this.productService.create(createProductDto)
    }
}
