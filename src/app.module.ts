import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistsModule } from './regist/regists.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RegistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
