import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryProduct } from '../entity/category-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryProductDto } from '../dto/category-product/create-category-product.dto';
import { UpdateCategoryProductDto } from '../dto/category-product/update-category-product.dto';
import { FilterCategoryProductDto } from '../dto/category-product/filter-category-product.dto';

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

    async update(id: number, updateCategoryProductDto : UpdateCategoryProductDto) : Promise<CreateCategoryProductDto> {
        const categoryProduct = await this.findById(id) 
        categoryProduct.name = updateCategoryProductDto.name
        
        return this.categoryProductRepository.save(categoryProduct)
    }

    find(filter: FilterCategoryProductDto) : Promise<CategoryProduct[]>{
        const datas = this.categoryProductRepository.createQueryBuilder(this.categoryProductRepository.metadata.tableName)

        if(filter.name) datas.andWhere('name LIKE :name', { name: `%${filter.name}%`})

        return datas.getMany()
    }

    async destroy(id: number) : Promise<boolean>{
        const doDelete = await this.categoryProductRepository.delete(id)

        if(doDelete.affected < 1) throw new NotFoundException(`Category Product with id ${id} is not found`);

        return true

    }
}