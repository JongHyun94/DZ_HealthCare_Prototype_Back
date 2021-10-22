import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e = require('express');
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { Cbotrcinnt } from '../entities/Cbotrcinnt';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crvitlsgnt } from '../entities/Crvitlsgnt';
import { Cxusemngmt } from '../entities/Cxusemngmt';


@Injectable()
export class RegistsService {
    constructor(
    //환자기본정보마스터
    @InjectRepository(Cbptbainmt)
    private CbptbainmtRepository: Repository<Cbptbainmt>,
    //외래접수정보
    @InjectRepository(Cbotrcinnt)
    private CbotrcinntRepository: Repository<Cbotrcinnt>,
    //사용자마스터
    @InjectRepository(Cxusemngmt)
    private CxusemngmtRepository: Repository<Cxusemngmt>,
    //신체사정
    @InjectRepository(Crvitlsgnt)
    private CrvitlsgntRepository: Repository<Crvitlsgnt>,
  ) {}

  // 전체 환자 리스트 가져오기
  async getPatientsList(): Promise<any[]> {
    const getPatientsList = await this.CbptbainmtRepository.createQueryBuilder('Cbptbainmt')
    .select(
        `
        Cbptbainmt.hspt_cd,
        Cbptbainmt.del_yn,
        Cbptbainmt.pid,
        Cbptbainmt.pt_nm,
        Cbptbainmt.pt_frrn,
        Cbptbainmt.pt_srrn,
        Cbptbainmt.dobr,
        Cbptbainmt.sex_cd,
        Cbptbainmt.cntc_tel,
        Cbptbainmt.clph_no,
        Cbptbainmt.basc_addr
        `,
    )
    .where(`Cbptbainmt.del_yn = 'N'`)
    .getRawMany();
    console.log('getPatientsList = ', getPatientsList);
    return getPatientsList;
  }

  // 전체 진료 리스트 가져오기
  /*
  `hspt_cd` varchar(10) NOT NULL COMMENT '병원코드',
  `rcpn_sqno` int(11) NOT NULL COMMENT '접수일련번호',
  `rcpn_dvcd` varchar(1) DEFAULT NULL COMMENT '접수구분코드',
  `pid` varchar(10) DEFAULT NULL COMMENT '환자등록번호',
  `pt_nm` varchar(50) DEFAULT NULL COMMENT '환자성명',
  `mdcr_date` varchar(8) DEFAULT NULL COMMENT '진료일자',
  `mdcr_hm` varchar(4) DEFAULT NULL COMMENT '진료시분',
  `mcrm_cd` varchar(10) DEFAULT NULL COMMENT '진찰실코드',
  `mddp_cd` varchar(10) DEFAULT NULL COMMENT '진료과코드',
  `mdcr_dr_id` varchar(20) DEFAULT NULL COMMENT '진료의사ID',
  `user_nm` varchar(50) DEFAULT NULL COMMENT '성명',
  `pt_arvl_dt` varchar(50) DEFAULT NULL COMMENT '환자도착일시',
  `rcpn_stat_cd` varchar(2) DEFAULT NULL COMMENT '접수상태코드',
  */
  async getRegistsList(): Promise<any[]> {
    const getRegistsList = await this.CbotrcinntRepository.createQueryBuilder('Cbotrcinnt')
    .select(
      `
      Cbotrcinnt.hspt_cd,
      Cbotrcinnt.rcpn_sqno,
      Cbotrcinnt.rcpn_dvcd,
      Cbotrcinnt.pid,
      Cbptbainmt.pt_nm,
      Cbotrcinnt.mdcr_date,
      Cbotrcinnt.mdcr_hm,
      Cbotrcinnt.mcrm_cd,
      Cbotrcinnt.mddp_cd,
      Cbotrcinnt.mdcr_dr_id,
      Cxusemngmt.user_nm,
      Cbotrcinnt.pt_arvl_dt,
      Cbotrcinnt.rcpn_stat_cd
      `,
    )
    .from(Cbptbainmt, 'Cbptbainmt')
    .from(Cxusemngmt,'Cxusemngmt')
    .where(`Cbptbainmt.pid = Cbotrcinnt.pid`)
    .andWhere(`Cxusemngmt.usid = Cbotrcinnt.mdcr_dr_id`)
    .getRawMany();
    console.log('getRegistsList = ', getRegistsList);
    return getRegistsList;
  }


  // 날짜 조건에 맞는 접수 목록 불러오기
  async getRegistsListByDate(date: string): Promise<any[]> {
    const getRegistsList = await this.CbotrcinntRepository.createQueryBuilder('Cbotrcinnt')
    .select(
      `
      Cbotrcinnt.hspt_cd,
      Cbotrcinnt.rcpn_sqno,
      Cbotrcinnt.rcpn_dvcd,
      Cbotrcinnt.pid,
      Cbptbainmt.pt_nm,
      Cbotrcinnt.mdcr_date,
      Cbotrcinnt.mdcr_hm,
      Cbotrcinnt.mcrm_cd,
      Cbotrcinnt.mddp_cd,
      Cbotrcinnt.mdcr_dr_id,
      Cxusemngmt.user_nm,
      Cbotrcinnt.pt_arvl_dt,
      Cbotrcinnt.rcpn_stat_cd
      `,
    )
    .from(Cbptbainmt, 'Cbptbainmt')
    .from(Cxusemngmt,'Cxusemngmt')
    .where(`Cbptbainmt.pid = Cbotrcinnt.pid`)
    .andWhere(`Cxusemngmt.usid = Cbotrcinnt.mdcr_dr_id`)
    .andWhere(`Cbotrcinnt.mdcr_date = :date`,{date: `${date}`})
    .getRawMany();
    console.log('getRegistsList = ', getRegistsList);
    return getRegistsList;
  }

  // 날짜 + 접수상태 조건 
  async getRegistsListByDateAndState(date: string, state: string): Promise<any[]> {
    if(state === ""){
      const getRegistsList = await this.CbotrcinntRepository.createQueryBuilder('Cbotrcinnt')
      .select(
        `
        Cbotrcinnt.hspt_cd,
        Cbotrcinnt.rcpn_sqno,
        Cbotrcinnt.rcpn_dvcd,
        Cbotrcinnt.pid,
        Cbptbainmt.pt_nm,
        Cbotrcinnt.mdcr_date,
        Cbotrcinnt.mdcr_hm,
        Cbotrcinnt.mcrm_cd,
        Cbotrcinnt.mddp_cd,
        Cbotrcinnt.mdcr_dr_id,
        Cxusemngmt.user_nm,
        Cbotrcinnt.pt_arvl_dt,
        Cbotrcinnt.rcpn_stat_cd
        `,
      )
      .from(Cbptbainmt, 'Cbptbainmt')
      .from(Cxusemngmt,'Cxusemngmt')
      .where(`Cbptbainmt.pid = Cbotrcinnt.pid`)
      .andWhere(`Cxusemngmt.usid = Cbotrcinnt.mdcr_dr_id`)
      .andWhere(`Cbotrcinnt.mdcr_date = :date`,{date: `${date}`})
      .getRawMany();
      console.log('getRegistsList = ', getRegistsList);
      return getRegistsList;
    } else {
      const getRegistsList = await this.CbotrcinntRepository.createQueryBuilder('Cbotrcinnt')
      .select(
        `
        Cbotrcinnt.hspt_cd,
        Cbotrcinnt.rcpn_sqno,
        Cbotrcinnt.rcpn_dvcd,
        Cbotrcinnt.pid,
        Cbptbainmt.pt_nm,
        Cbotrcinnt.mdcr_date,
        Cbotrcinnt.mdcr_hm,
        Cbotrcinnt.mcrm_cd,
        Cbotrcinnt.mddp_cd,
        Cbotrcinnt.mdcr_dr_id,
        Cxusemngmt.user_nm,
        Cbotrcinnt.pt_arvl_dt,
        Cbotrcinnt.rcpn_stat_cd
        `,
      )
      .from(Cbptbainmt, 'Cbptbainmt')
      .from(Cxusemngmt, 'Cxusemngmt')
      .where(`Cbptbainmt.pid = Cbotrcinnt.pid`)
      .andWhere(`Cxusemngmt.usid = Cbotrcinnt.mdcr_dr_id`)
      .andWhere(`Cbotrcinnt.mdcr_date = :date`,{date: `${date}`})
      .andWhere(`Cbotrcinnt.rcpn_stat_cd = :state`, {state: `${state}`})
      .getRawMany();
      console.log('getRegistsList = ', getRegistsList);
      return getRegistsList;
    }
  }
  async createNewRegister(newRegister): Promise<any> {
    const RECENT_ID = await this.CbotrcinntRepository.createQueryBuilder('Cbotrcinnt')
    .select(
      `max(Cbotrcinnt.rcpn_sqno) + 1 AS RECENT_ID`
    )
    .getRawOne();

    const result = await this.CbotrcinntRepository.createQueryBuilder('Cbotrcinnt')
    .insert()
    .into(Cbotrcinnt)
    .values({
      hsptCd: newRegister.regiHsptCd,
      frstRgstUsid: "ADMIN",
      lastUpdtUsid: "ADMIN",
      rcpnSqno: RECENT_ID.RECENT_ID,
      rcpnDvcd: "A",
      pid: newRegister.pid,
      mdcrDate: newRegister.regiDate,
      mdcrHm: newRegister.regiTime,
      mddpCd: "IM",
      mdcrDrId: newRegister.regiDoctor,
      rcpnStatCd: "R",
      insnTycd: "1",
    })
    .execute();

    console.log(result);
    return result;
  }

  async getVitalPatient(pid): Promise<any[]> {
    const vitalList = await this.CrvitlsgntRepository.createQueryBuilder('Crvitlsgnt')
    .select(`
      Crvitlsgnt.pid,
      Crvitlsgnt.inpt_dt,
      Crvitlsgnt.sbp,
      Crvitlsgnt.pr,
      Crvitlsgnt.rr,
      Crvitlsgnt.bt,
      Crvitlsgnt.fbs,
      Crvitlsgnt.hght,
      Crvitlsgnt.wght,
      Crvitlsgnt.bmi
    `)
    .where(`Crvitlsgnt.pid = :pid`, {pid: `${pid}`})
    .getRawMany();

    console.log('getVitalPatient: ', vitalList);
    return vitalList;
  }
}
