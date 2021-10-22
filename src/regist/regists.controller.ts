import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { RegistsService } from './regists.service';


@Controller('regists')
export class RegistsController {
  constructor(private registsService: RegistsService) {}

  // 전체 환자 목록 조회
  @Get('/patients')
  async GetPatients(): Promise<any[]> {
    return this.registsService.getPatientsList();
  }

  // 전체 진료 목록 조회
  // @Get('/registers')
  // async GetRegists(): Promise<any[]> {
  //   return this.registsService.getRegistsList();
  // }

  // 조건에 맞는 진료 목록 조회
  @Get('/registers')
  async GetRegistsByDate(@Query('date') date: string): Promise<any[]> {
    console.log("date: ",date);
    return this.registsService.getRegistsListByDate(date);
  }

  // @Get('/registers')
  // async GetRegistsByDateAndState(@Query('date') date: string, @Query('state') state: string): Promise<any[]> {
  //   console.log("date: ", date);
  //   console.log("state: ", state);
  //   return this.registsService.getRegistsListByDateAndState(date, state);
  // }
  // 새로운 접수 만들기
  @Post('/registers')
  async CreateNewRegister(@Body() newRegister) : Promise<any>{
    console.log("newRegister:", newRegister);
    return this.registsService.createNewRegister(newRegister);
  }
  
  // 선택된 환자 신체사정 불러오기
  @Get('/vital')
  async getVitalPatient(@Query('pid') pid: string) : Promise<any[]> {
    return this.registsService.getVitalPatient(pid);
  }
}
