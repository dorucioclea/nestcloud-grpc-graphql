import { NestCloud } from '@nestcloud/core';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = NestCloud.create(await NestFactory.create(AppModule));
    await app.listen(NestCloud.global.boot.get('service.port', 3000));
}

bootstrap();
