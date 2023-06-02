import { Module } from '@nestjs/common';
import { ProductModule } from './Product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
