import { Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn } from 'typeorm';
import { CategoryProducts } from './CategoryProducts.entity';

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToOne(() => CategoryProducts)
    @JoinColumn()
    category: string;

    @Column()
    qty: number;

    @Column()
    price: number;
}
