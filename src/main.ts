import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { useSwegger } from '@app/common/useSwagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  useSwegger(app);

  await app.listen(3000);
}

bootstrap();
