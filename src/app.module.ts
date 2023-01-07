import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EnviromentsConfig } from './commons/enviroments.config';
import { envConfig } from './commons/env.config';

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
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
