import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EnviromentsConfig } from './commons/enviroments.config';
import { envConfig } from './commons/env.config';
import { AuthModule } from './auth/auth.module';
import Joi from 'joi';

@Module({
  imports: [
    PortfolioModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: Object.values(EnviromentsConfig)
        .map((e) => e.valueOf())
        .includes(process.env.NODE_ENV)
        ? `.${process.env.NODE_ENV}.env`
        : '.env.local',
      load: [envConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
