import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { User } from './entity/User';

import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap(useFasify: string | undefined) {
  if (useFasify === 'fastify') {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );

    await app.listen(PORT || 3000);
    console.log(`App listen on port ${PORT}`);
  }

  const app = await NestFactory.create(AppModule);

  await app.listen(PORT || 3000);

  const user = await getConnection()
    .createQueryBuilder()
    .select('user')
    .from(User, 'user')
    .where('user.login = :login', { login: 'admin' })
    .getOne();

  if (!user) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ name: 'admin', login: 'admin', password: 'admin' }])
      .execute();
  }
  console.log(`App listen on port ${PORT}`);
}
bootstrap(USE_FASTIFY);
