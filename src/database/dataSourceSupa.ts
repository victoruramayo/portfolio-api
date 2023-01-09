import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const connectionSource = new DataSource({
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
});
