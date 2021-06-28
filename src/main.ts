import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 3000);
  console.log(`App listen on port ${PORT}`);
}
bootstrap();
