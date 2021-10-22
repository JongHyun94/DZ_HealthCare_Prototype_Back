import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cbotrcinnt } from '../entities/Cbotrcinnt';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crvitlsgnt } from '../entities/Crvitlsgnt';
import { Cxusemngmt } from '../entities/Cxusemngmt';
import { RegistsController } from './regists.controller';
import { RegistsService } from './regists.service';


@Module({
    imports: [TypeOrmModule.forFeature([Cbptbainmt, Cbotrcinnt, Cxusemngmt, Crvitlsgnt])],
    controllers: [RegistsController],
    providers: [RegistsService],
  })
export class RegistsModule {}
