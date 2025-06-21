import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 👇 Active CORS ici
  app.enableCors({
    origin: 'http://localhost:4200', // autorise le front Angular
    credentials: true,              // utile si tu envoies des cookies/token
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
