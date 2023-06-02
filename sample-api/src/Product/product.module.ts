import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './service/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { CategoryProduct } from './entity/category-product.entity';
import { CategoryProductService } from './service/category-product.service';
import { CategoryProductController } from './controllers/category-product.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Product,
        CategoryProduct
    ])],
    controllers:[ProductController, CategoryProductController],
    providers: [
        ProductService,
        CategoryProductService
    ]
})
export class ProductModule {}
