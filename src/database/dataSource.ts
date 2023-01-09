import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const connectionSource = new DataSource({
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
});
