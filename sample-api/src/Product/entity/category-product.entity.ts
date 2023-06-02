import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoryProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
