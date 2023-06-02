import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig : TypeOrmModuleOptions = {
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'sample_api',
    autoLoadEntities: true,
    entities: [__dirname + '/../**/*.entity.{ts, js}'],
    synchronize: true,
}