import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from '../commons/env.config';
import { ConfigType } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (conf: ConfigType<typeof envConfig>) => {
        return {
          type: 'postgres',
          host: conf.database.host,
          port: conf.database.port,
          username: conf.database.userName,
          password: conf.database.pass,
          database: conf.database.dbName,
          autoLoadEntities: true,
          //logging: true,
          namingStrategy: new SnakeNamingStrategy(),
        };
      },
      inject: [envConfig.KEY],
    }),
  ],
})
export class DatabaseModule {}
