import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeders/main.seeder';

const opts: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  namingStrategy: new SnakeNamingStrategy(),
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'my_db',
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  seeds: [MainSeeder],
};
export const connectionSource = new DataSource(opts);
