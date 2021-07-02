import { NestFactory } from '@nestjs/core';
import {
  // FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
// import { checkToken } from './nest-middleware/check-token';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap(useFasify: string | undefined) {
  if (useFasify === 'fastify') {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      // new FastifyAdapter(),
      
    );
    // app.use(checkToken);
    await app.listen(PORT || 3000);
    console.log(`App listen on port ${PORT}`);
  }

  const app = await NestFactory.create(AppModule);
  // app.use(checkToken);
  await app.listen(PORT || 3000);
  console.log(`App listen on port ${PORT}`);
}
bootstrap(USE_FASTIFY);
