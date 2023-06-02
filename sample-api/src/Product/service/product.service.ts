import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entity/product.entity';
import { Repository } from 'typeorm';
import {v4 as uuidv4} from 'uuid';
import { CategoryProduct } from '../entity/category-product.entity';
import { CategoryProductService } from './category-product.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly categoryProductService: CategoryProductService
    ) {}

    async create(createProductDto : CreateProductDto) : Promise<Product>{
        const categoryProduct = await this.categoryProductService.findById(createProductDto.categoryId)
        const product = new Product()
        product.id = uuidv4();
        product.name = createProductDto.name
        product.qty = createProductDto.qty
        product.price = createProductDto.price
        return await this.productRepository.save(product)
    }
}
