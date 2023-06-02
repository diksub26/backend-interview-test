import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryProduct } from '../entity/category-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryProductDto } from '../dto/category-product/create-category-product.dto';

@Injectable()
export class CategoryProductService {
    constructor(
        @InjectRepository(CategoryProduct)
        private readonly categoryProductRepository: Repository<CategoryProduct>
    ) {}

    async findById(id: number) : Promise<CategoryProduct>{
        const categoryProduct = await this.categoryProductRepository.findOneBy({id: id})
        if(!categoryProduct) throw new BadRequestException(["Category Product Not Found"])

        return categoryProduct
    }

    create(createProductCategoryDto: CreateCategoryProductDto) : Promise<CreateCategoryProductDto> {
        const categoryProduct = new CategoryProduct()
        categoryProduct.name = createProductCategoryDto.name
        return this.categoryProductRepository.save(categoryProduct)
    }
}