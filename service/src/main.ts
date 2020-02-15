import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { AppLogger } from '@/app.logger';

async function bootstrap() {
  const port = 2999;
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useLogger(app.get(AppLogger));
  await app.listen(port);
  await app.close();
}

bootstrap().then();