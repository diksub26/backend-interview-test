import { Entity, Column,JoinColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { CategoryProduct } from './category-product.entity';

@Entity()
export class Product {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => CategoryProduct, (categoryProduct) => categoryProduct.product)
    @JoinColumn()
    category: CategoryProduct;

    @Column('int')
    qty: number;

    @Column('int')
    price: number;
}
