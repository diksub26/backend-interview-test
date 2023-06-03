import { Controller, Get, Param, Post, Body ,Put, Query, Delete} from '@nestjs/common';
import { CreateCategoryProductDto } from '../dto/category-product/create-category-product.dto';
import { CategoryProductService } from '../service/category-product.service';
import { FilterCategoryProductDto } from '../dto/category-product/filter-category-product.dto';
import { UpdateCategoryProductDto } from '../dto/category-product/update-category-product.dto';
import { GenerateResponse } from "src/helper/GenerateResponse";
import { SUCCESS_DELETE_MESSAGE, SUCCESS_STORE_MESSAGE, SUCCESS_UPDATE_MESSAGE } from 'src/helper/GeneralResponseMessage';

@Controller('category-product')
export class CategoryProductController {
    constructor(
        private readonly categoryProductService: CategoryProductService
    ){}

    @Get(":id")
    async getById(@Param("id") id: number) {
        const categoryProduct = await this.categoryProductService.findById(id)
        return new GenerateResponse({statusCode: 200, data: categoryProduct})
    }

    @Post()
    async create(@Body() createCategoryProductDto : CreateCategoryProductDto) {
        const createCategoryProduct = await this.categoryProductService.create(createCategoryProductDto)
        return new GenerateResponse({statusCode :201, message: SUCCESS_UPDATE_MESSAGE, data: createCategoryProduct})
    }

    @Put(":id")
    async update(@Param("id") id : number, @Body() updateCategoryProductDto: UpdateCategoryProductDto) {
        const updateCategoryProduct = await this.categoryProductService.update(id, updateCategoryProductDto)
        return new GenerateResponse({statusCode :200, message: SUCCESS_STORE_MESSAGE, data: updateCategoryProduct})
    }

    @Get()
    async get(@Query() filter : FilterCategoryProductDto) {
        const categoryProducts = await this.categoryProductService.find(filter)
        return new GenerateResponse({statusCode :200, data: categoryProducts})
    }

    @Delete(':id')
    async destroy(@Param("id") id: number) {
        const deleteCategoryProduct = await this.categoryProductService.destroy(id)
        return new GenerateResponse({statusCode :200, message: SUCCESS_DELETE_MESSAGE, data: []})
    }
}
