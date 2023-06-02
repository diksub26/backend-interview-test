import { Module } from '@nestjs/common';
import { ManageProductController } from './Controllers/manage-product.controller';

@Module({
    imports:[],
    controllers:[ManageProductController]
})
export class ProductModule {}
