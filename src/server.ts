/* import {PORT} from './common/config';
import app from './app';

app.listen(PORT, async () => {
  console.log(`App running on ${PORT}!`)
}); */


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
