// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { SwaggerModule } from '@nestjs/swagger';
// import { config } from './common/config/swagger';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // app.setGlobalPrefix('api');

//   app.useGlobalPipes(new ValidationPipe({
//     whitelist:true,
//     forbidNonWhitelisted:true
//   }))
//   app.enableCors()


//   const documentFactory = () => SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, documentFactory,{
//     swaggerOptions:{persistAuthorization:true}
//   });

//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from './common/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // ── CORS: React frontend ga ruxsat berish ──
  app.enableCors({ origin: '*' }); // yoki aniq frontend URL
  app.enableCors({
    
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    swaggerOptions: { persistAuthorization: true },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();