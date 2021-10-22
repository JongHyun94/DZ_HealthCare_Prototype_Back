import { Column, Entity } from "typeorm";

@Entity("cbptbainmt", { schema: "cli" })
export class Cbptbainmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 10 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgst_usid",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgstUsid: string;

  @Column("datetime", {
    name: "frst_rgdt",
    comment: "최초등록일시",
    default: () => "'2000-00-06 00:00:00'",
  })
  frstRgdt: Date;

  @Column("varchar", {
    name: "last_updt_usid",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string;

  @Column("datetime", {
    name: "last_uddt",
    comment: "최종수정일시",
    default: () => "'2000-00-06 00:00:00'",
  })
  lastUddt: Date;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;

  @Column("varchar", {
    primary: true,
    name: "pid",
    comment: "환자등록번호",
    length: 20,
  })
  pid: string;

  @Column("varchar", { name: "pt_nm", comment: "환자명", length: 200 })
  ptNm: string;

  @Column("varchar", {
    name: "pt_frrn",
    nullable: true,
    comment: "환자주민등록앞번호",
    length: 30,
  })
  ptFrrn: string | null;

  @Column("varchar", {
    name: "pt_srrn",
    nullable: true,
    comment: "환자주민등록뒷번호",
    length: 7,
  })
  ptSrrn: string | null;

  @Column("varchar", { name: "dobr", comment: "생년월일", length: 8 })
  dobr: string;

  @Column("varchar", {
    name: "dobr_dvcd",
    comment: "생년월일구분코드",
    length: 1,
  })
  dobrDvcd: string;

  @Column("varchar", {
    name: "sex_cd",
    nullable: true,
    comment: "성별코드",
    length: 1,
  })
  sexCd: string | null;

  @Column("varchar", {
    name: "cntc_tel",
    nullable: true,
    comment: "연락전화번호",
    length: 30,
  })
  cntcTel: string | null;

  @Column("varchar", {
    name: "clph_no",
    nullable: true,
    comment: "휴대폰번호",
    length: 30,
  })
  clphNo: string | null;

  @Column("varchar", {
    name: "co_tel",
    nullable: true,
    comment: "회사전화번호",
    length: 30,
  })
  coTel: string | null;

  @Column("varchar", {
    name: "etc_tel",
    nullable: true,
    comment: "기타전화번호",
    length: 30,
  })
  etcTel: string | null;

  @Column("varchar", {
    name: "cntc_emal",
    nullable: true,
    comment: "연락이메일",
    length: 50,
  })
  cntcEmal: string | null;

  @Column("varchar", {
    name: "pstl_no",
    nullable: true,
    comment: "우편번호",
    length: 10,
  })
  pstlNo: string | null;

  @Column("int", { name: "pstl_sqno", nullable: true, comment: "우편일련번호" })
  pstlSqno: number | null;

  @Column("varchar", {
    name: "pstl_no_2",
    nullable: true,
    comment: "우편번호2",
    length: 10,
  })
  pstlNo_2: string | null;

  @Column("int", {
    name: "pstl_sqno_2",
    nullable: true,
    comment: "우편일련번호2",
  })
  pstlSqno_2: number | null;

  @Column("varchar", {
    name: "basc_addr",
    nullable: true,
    comment: "기본주소",
    length: 300,
  })
  bascAddr: string | null;

  @Column("varchar", {
    name: "detl_addr",
    nullable: true,
    comment: "상세주소",
    length: 300,
  })
  detlAddr: string | null;

  @Column("varchar", {
    name: "detl_addr_2",
    nullable: true,
    comment: "상세주소2",
    length: 300,
  })
  detlAddr_2: string | null;

  @Column("varchar", {
    name: "basc_addr_2_yn",
    nullable: true,
    comment: "기본주소2여부",
    length: 1,
  })
  bascAddr_2Yn: string | null;

  @Column("varchar", {
    name: "basc_addr_2",
    nullable: true,
    comment: "기본주소2",
    length: 300,
  })
  bascAddr_2: string | null;

  @Column("varchar", {
    name: "pt_dvcd",
    nullable: true,
    comment: "환자구분코드",
    length: 1,
  })
  ptDvcd: string | null;

  @Column("varchar", {
    name: "frnr_yn",
    nullable: true,
    comment: "외국인여부",
    length: 1,
  })
  frnrYn: string | null;

  @Column("varchar", {
    name: "frnr_ntnl_cd",
    nullable: true,
    comment: "외국인국적코드",
    length: 4,
  })
  frnrNtnlCd: string | null;

  @Column("varchar", {
    name: "sms_trms_cnsn_yn",
    nullable: true,
    comment: "SMS전송동의여부",
    length: 1,
  })
  smsTrmsCnsnYn: string | null;

  @Column("varchar", {
    name: "emal_trms_cnsn_yn",
    nullable: true,
    comment: "이메일전송동의여부",
    length: 1,
  })
  emalTrmsCnsnYn: string | null;

  @Column("varchar", {
    name: "vhcl_no",
    nullable: true,
    comment: "차량번호",
    length: 1,
  })
  vhclNo: string | null;

  @Column("varchar", {
    name: "uncl_rcpn_psbl_yn",
    nullable: true,
    comment: "미수접수가능여부",
    length: 1,
  })
  unclRcpnPsblYn: string | null;

  @Column("varchar", {
    name: "deth_yn",
    nullable: true,
    comment: "사망여부",
    length: 1,
  })
  dethYn: string | null;

  @Column("varchar", {
    name: "deth_dt",
    nullable: true,
    comment: "사망일시",
    length: 50,
  })
  dethDt: string | null;

  @Column("varchar", {
    name: "plce_of_birth",
    nullable: true,
    comment: "출생장소",
    length: 30,
  })
  plceOfBirth: string | null;

  @Column("varchar", {
    name: "empl_rltd_yn",
    nullable: true,
    comment: "직원관련여부(본인/가족)",
    length: 1,
  })
  emplRltdYn: string | null;

  @Column("varchar", {
    name: "job_cd",
    nullable: true,
    comment: "직업코드",
    length: 3,
  })
  jobCd: string | null;

  @Column("varchar", {
    name: "prgn_yn",
    nullable: true,
    comment: "임신여부",
    length: 1,
  })
  prgnYn: string | null;

  @Column("varchar", {
    name: "fmly_no",
    nullable: true,
    comment: "가족번호",
    length: 100,
  })
  fmlyNo: string | null;

  @Column("varchar", {
    name: "bind_pid",
    nullable: true,
    comment: "합본환자등록번호",
    length: 20,
  })
  bindPid: string | null;

  @Column("varchar", {
    name: "mthr_pid",
    nullable: true,
    comment: "모환자등록번호",
    length: 20,
  })
  mthrPid: string | null;

  @Column("varchar", {
    name: "chpt_no",
    nullable: true,
    comment: "행려환자번호",
    length: 13,
  })
  chptNo: string | null;

  @Column("varchar", {
    name: "fclt_pt_no",
    nullable: true,
    comment: "시설환자번호",
    length: 13,
  })
  fcltPtNo: string | null;

  @Column("varchar", {
    name: "abo_type_cd",
    nullable: true,
    comment: "ABO혈액형",
    length: 3,
  })
  aboTypeCd: string | null;

  @Column("varchar", {
    name: "rh_type_cd",
    nullable: true,
    comment: "RH혈액형",
    length: 2,
  })
  rhTypeCd: string | null;

  @Column("varchar", {
    name: "last_cmhs_dt",
    nullable: true,
    comment: "최종내원일시",
    length: 50,
  })
  lastCmhsDt: string | null;

  @Column("varchar", {
    name: "rcpn_impb_yn",
    nullable: true,
    comment: "접수불가여부",
    length: 1,
  })
  rcpnImpbYn: string | null;

  @Column("varchar", {
    name: "papr_rcrd_en",
    nullable: true,
    comment: "종이기록유무",
    length: 1,
  })
  paprRcrdEn: string | null;

  @Column("varchar", {
    name: "imgn_rcrd_en",
    nullable: true,
    comment: "영상기록유무",
    length: 1,
  })
  imgnRcrdEn: string | null;

  @Column("varchar", {
    name: "emr_en",
    nullable: true,
    comment: "EMR유무",
    length: 1,
  })
  emrEn: string | null;
}
