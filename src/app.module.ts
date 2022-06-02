import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'root',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: false,
    }), PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
