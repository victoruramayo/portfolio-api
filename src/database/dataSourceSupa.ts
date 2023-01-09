import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeders/main.seeder';

const opts: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'db.atqvohiizznwgxzlljbk.supabase.co',
  namingStrategy: new SnakeNamingStrategy(),
  port: 5432,
  username: 'postgres',
  password: 'qcl0BbViZfID7YfM',
  database: 'postgres',
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  seeds: [MainSeeder],
};
export const connectionSource = new DataSource(opts);
