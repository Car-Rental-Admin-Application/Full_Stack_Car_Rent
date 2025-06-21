import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthService } from './auth/auth.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS pour autoriser les requêtes venant de localhost:4200 (Angular)
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true, // si besoin d'envoyer cookies ou headers d'auth
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
