import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('SaaS Portfolio')
    .setDescription('SaaS for create API Portfolio')
    .setVersion('1.0')
    .addTag('Portfolio')
    .addApiKey(
      { type: 'apiKey', name: 'Authorization', in: 'header' },
      'Api-Key',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
