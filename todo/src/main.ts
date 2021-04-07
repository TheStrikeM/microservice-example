import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import { join } from 'path';
import {Logger} from "@nestjs/common";

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'todo',
      protoPath: join(__dirname, '..', 'proto/todo.proto')
    }
  })

  await app.listen(() => logger.log('Microservice Todo has success started'));
}
bootstrap();
