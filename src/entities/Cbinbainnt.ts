import { Column, Entity } from "typeorm";

@Entity("cbinbainnt", { schema: "cli" })
export class Cbinbainnt {
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
    primary: true,
    name: "pid",
    comment: "환자등록번호",
    length: 10,
  })
  pid: string;

  @Column("varchar", {
    primary: true,
    name: "insn_tycd",
    comment: "보험유형코드",
    length: 4,
  })
  insnTycd: string;

  @Column("int", { primary: true, name: "incs_sqno", comment: "산재일련번호" })
  incsSqno: number;

  @Column("varchar", {
    name: "incs_acdn_date",
    nullable: true,
    comment: "산재사고일자",
    length: 8,
  })
  incsAcdnDate: string | null;

  @Column("varchar", {
    name: "brno",
    nullable: true,
    comment: "사업자등록번호",
    length: 10,
  })
  brno: string | null;

  @Column("varchar", {
    name: "wrkp_nm",
    nullable: true,
    comment: "사업장명",
    length: 100,
  })
  wrkpNm: string | null;

  @Column("varchar", {
    name: "empy_nm",
    nullable: true,
    comment: "사업주성명",
    length: 50,
  })
  empyNm: string | null;

  @Column("varchar", {
    name: "incs_mngm_no",
    nullable: true,
    comment: "산재관리번호",
    length: 9,
  })
  incsMngmNo: string | null;

  @Column("varchar", {
    name: "frst_cmhs_date",
    nullable: true,
    comment: "최초내원일자",
    length: 8,
  })
  frstCmhsDate: string | null;

  @Column("varchar", {
    name: "rcpr_dvcd",
    nullable: true,
    comment: "요양구분코드",
    length: 2,
  })
  rcprDvcd: string | null;

  @Column("varchar", {
    name: "trmn_yn",
    nullable: true,
    comment: "종결여부",
    length: 1,
  })
  trmnYn: string | null;

  @Column("varchar", {
    name: "trmn_date",
    nullable: true,
    comment: "종결일자",
    length: 8,
  })
  trmnDate: string | null;

  @Column("varchar", {
    name: "incs_trmn_resn_cd",
    nullable: true,
    comment: "산재종결사유코드",
    length: 1,
  })
  incsTrmnResnCd: string | null;

  @Column("varchar", {
    name: "prmt_date",
    nullable: true,
    comment: "승인일자",
    length: 8,
  })
  prmtDate: string | null;

  @Column("varchar", {
    name: "incs_apdy",
    nullable: true,
    comment: "산재적용일자",
    length: 8,
  })
  incsApdy: string | null;

  @Column("varchar", {
    name: "incs_endy",
    nullable: true,
    comment: "산재종료일자",
    length: 8,
  })
  incsEndy: string | null;

  @Column("varchar", {
    name: "mdtr_rslt_cd",
    nullable: true,
    comment: "치료결과코드",
    length: 2,
  })
  mdtrRsltCd: string | null;

  @Column("varchar", {
    name: "mdcr_stdy",
    nullable: true,
    comment: "진료시작일자",
    length: 8,
  })
  mdcrStdy: string | null;

  @Column("varchar", {
    name: "mdcr_endy",
    nullable: true,
    comment: "진료종료일자",
    length: 8,
  })
  mdcrEndy: string | null;

  @Column("varchar", {
    name: "smcr_cost_refr_yn",
    nullable: true,
    comment: "선택진료비의뢰여부",
    length: 1,
  })
  smcrCostRefrYn: string | null;

  @Column("varchar", { name: "insr_rgno", comment: "보험자기호", length: 20 })
  insrRgno: string;

  @Column("varchar", {
    name: "nots",
    nullable: true,
    comment: "참고사항",
    length: 1500,
  })
  nots: string | null;
}
