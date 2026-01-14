import { join } from 'path';
import { PORT } from './config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', '..', 'frontend', 'dist'));

  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*', allowedHeaders: '*' });

  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(PORT ?? 5000);
}
bootstrap();