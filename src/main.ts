import { NestFactory } from '@nestjs/core';
 import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
/*
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express'; */

import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap(useFasify:string | undefined) {
  if(useFasify === 'fastify'){
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );
    await app.listen(PORT || 3000);
    console.log(`App listen on port ${PORT}`);
  }


  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 3000);
  console.log(`App listen on port ${PORT}`);
}
bootstrap(USE_FASTIFY);
