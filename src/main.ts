import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import { ValidationPipe, VersioningType } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .setGlobalPrefix(process.env.CONFIG_PREFIX);
  await app.listen(process.env.CONFIG_PORT);
  console.log(`Application is running on: ${process.env.CONFIG_DOMAIN_SERVICE + ':' + process.env.CONFIG_PORT} `);
}
bootstrap();
