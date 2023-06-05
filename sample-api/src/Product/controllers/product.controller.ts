import { Controller, Get, Param, Post, Body, Patch,Delete,Query } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { UpdateProductDto } from '../dto/product/update-product.dto';
import { GenerateResponse } from 'src/helper/GenerateResponse';
import { SUCCESS_DELETE_MESSAGE, SUCCESS_STORE_MESSAGE, SUCCESS_UPDATE_MESSAGE } from 'src/helper/GeneralResponseMessage';
import { FilterProductDto } from '../dto/product/filter-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get(":id")
    async getById(@Param("id") id: string) {
        const product = await this.productService.findById(id)
        return new GenerateResponse({statusCode: 200, data: product})
    }

    @Post()
    async create(@Body() createProductDto : CreateProductDto) {
        const product = await this.productService.create(createProductDto)
        return new GenerateResponse({statusCode: 201, message: SUCCESS_STORE_MESSAGE, data: product})
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() data: UpdateProductDto) {
        const product = await this.productService.update(id, data)
        return new GenerateResponse({statusCode: 201, message: SUCCESS_UPDATE_MESSAGE, data: product})
    }

    @Delete(':id')
    async destroy(@Param("id") id: number) {
        const deleteCategoryProduct = await this.productService.destroy(id)
        return new GenerateResponse({statusCode :200, message: SUCCESS_DELETE_MESSAGE, data: []})
    }

    @Get()
    async get(@Query() filter : FilterProductDto) {
        const products = await this.productService.find(filter)
        return new GenerateResponse({statusCode :200, data: products})
    }

}
