import { Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn } from 'typeorm';
import { CategoryProduct } from './category-product.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToOne(() => CategoryProduct)
    @JoinColumn()
    category: CategoryProduct;

    @Column('int')
    qty: number;

    @Column('int')
    price: number;
}
