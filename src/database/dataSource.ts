import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeders/main.seeder';
import dotenv from 'dotenv';
import { EnviromentsConfig } from '../commons/enviroments.config';

dotenv.config({
  path: Object.values(EnviromentsConfig)
    .map((e) => e.valueOf())
    .includes(process.env.NODE_ENV)
    ? `.${process.env.NODE_ENV}.env`
    : '.env.local',
});

const opts: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  namingStrategy: new SnakeNamingStrategy(),
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  seeds: [MainSeeder],
};
export const connectionSource = new DataSource(opts);
