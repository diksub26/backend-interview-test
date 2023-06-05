import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entity/product.entity';
import { QueryFailedError, Repository, TypeORMError } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CategoryProductService } from './category-product.service';
import { FilterProductDto } from '../dto/product/filter-product.dto';
import { UpdateProductDto } from '../dto/product/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly categoryProductService: CategoryProductService
    ) { }

    async create(dataProduct: CreateProductDto): Promise<Product> {
        const categoryProduct = await this.categoryProductService.findById(dataProduct.categoryId)

        const product = this.productRepository.create(dataProduct)
        product.id = uuidv4();
        product.category = categoryProduct

        return await this.productRepository.save(product)
    }

    async findById(id: string): Promise<Product> {
        const product = await this.productRepository.findOne({
            where: { id: id },
            relations: {
                category: true
            }
        })

        if (!product) throw new NotFoundException(`Product with id ${id} not found`)

        return product
    }

    find(filter: FilterProductDto): Promise<Product[]> {
        const datas = this.productRepository.createQueryBuilder(this.productRepository.metadata.tableName)

        if (filter.name) datas.andWhere("name LIKE :name", { name: `%${filter.name}%` })
        if (filter.price) datas.andWhere("price LIKE :price", { price: `%${filter.price}%` })

        return datas.getMany()
    }

    async update(id: string, data: UpdateProductDto): Promise<Product> {
        const categoryProduct = await this.categoryProductService.findById(data.categoryId)

        let product = await this.findById(id)
        product = Object.assign(product, data);
        product.category = categoryProduct
        return await this.productRepository.save(product)
    }

    async destroy(id: number) : Promise<boolean>{
        const doDelete = await this.productRepository.delete(id)

        if(doDelete.affected < 1) throw new NotFoundException(`Product with id ${id} is not found`);

        return true

    }
}
