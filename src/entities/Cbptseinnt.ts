import { Column, Entity } from "typeorm";

@Entity("cbptseinnt", { schema: "cli" })
export class Cbptseinnt {
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

  @Column("int", { primary: true, name: "rcpn_sqno", comment: "접수일련번호" })
  rcpnSqno: number;

  @Column("varchar", {
    primary: true,
    name: "pid",
    comment: "환자등록번호",
    length: 10,
  })
  pid: string;

  @Column("varchar", {
    primary: true,
    name: "cfsc_qlfc_dvcd",
    comment: "산정특례자격구분코드",
    length: 1,
  })
  cfscQlfcDvcd: string;

  @Column("varchar", {
    primary: true,
    name: "insn_tycd",
    comment: "보험유형코드",
    length: 4,
  })
  insnTycd: string;

  @Column("varchar", {
    primary: true,
    name: "sevr_stdy",
    comment: "중증시작일자",
    length: 8,
  })
  sevrStdy: string;

  @Column("varchar", {
    name: "sevr_rgst_no",
    nullable: true,
    comment: "중증등록번호",
    length: 15,
  })
  sevrRgstNo: string | null;

  @Column("int", {
    name: "sevr_dgns_cd",
    nullable: true,
    comment: "중증진단코드",
  })
  sevrDgnsCd: number | null;

  @Column("varchar", {
    name: "sevr_endy",
    nullable: true,
    comment: "중증종료일자",
    length: 8,
  })
  sevrEndy: string | null;

  @Column("varchar", {
    name: "spcf_brkd_cd",
    nullable: true,
    comment: "특정내역코드",
    length: 5,
  })
  spcfBrkdCd: string | null;

  @Column("varchar", {
    name: "sclw_dvcd",
    nullable: true,
    comment: "차상위구분코드",
    length: 1,
  })
  sclwDvcd: string | null;

  @Column("varchar", {
    name: "cfsc_ilns_rgno",
    nullable: true,
    comment: "산정특례상병기호",
    length: 25,
  })
  cfscIlnsRgno: string | null;

  @Column("varchar", {
    name: "prnl_trgt_rgst_no",
    nullable: true,
    comment: "산전대상등록번호",
    length: 15,
  })
  prnlTrgtRgstNo: string | null;

  @Column("varchar", {
    name: "frst_pgcf_date",
    nullable: true,
    comment: "최초임신확인일자",
    length: 8,
  })
  frstPgcfDate: string | null;

  @Column("varchar", {
    name: "chbr_dudt",
    nullable: true,
    comment: "출산예정일자",
    length: 8,
  })
  chbrDudt: string | null;

  @Column("varchar", {
    name: "prnl_mdcr_md",
    nullable: true,
    comment: "산전진료월일",
    length: 56,
  })
  prnlMdcrMd: string | null;

  @Column("varchar", {
    name: "cncr_rgst_yn",
    nullable: true,
    comment: "암등록여부",
    length: 1,
  })
  cncrRgstYn: string | null;

  @Column("varchar", {
    name: "nots",
    nullable: true,
    comment: "참고사항",
    length: 1500,
  })
  nots: string | null;
}
