import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`Application is running on: ${process.env.CONFIG_DOMAIN_SERVICE + ':' + process.env.CONFIG_PORT} `);
}
bootstrap();
