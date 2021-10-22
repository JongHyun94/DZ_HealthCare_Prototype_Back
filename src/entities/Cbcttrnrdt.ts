import { Column, Entity } from "typeorm";

@Entity("cbcttrnrdt", { schema: "cli" })
export class Cbcttrnrdt {
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
    name: "ctur_cd",
    comment: "계약처미수납코드",
    length: 4,
  })
  cturCd: string;

  @Column("int", {
    primary: true,
    name: "ctur_detl_sqno",
    comment: "계약처미수납상세일련번호",
  })
  cturDetlSqno: number;

  @Column("varchar", {
    name: "ctur_detl_apdy",
    nullable: true,
    comment: "계약처미수납상세적용일자",
    length: 8,
  })
  cturDetlApdy: string | null;

  @Column("varchar", {
    name: "ctur_detl_endy",
    nullable: true,
    comment: "계약처미수납상세종료일자",
    length: 8,
  })
  cturDetlEndy: string | null;

  @Column("varchar", {
    name: "cttr_mdcr_dvcd",
    nullable: true,
    comment: "계약처진료구분코드",
    length: 1,
  })
  cttrMdcrDvcd: string | null;

  @Column("varchar", {
    name: "fafr_dvcd",
    nullable: true,
    comment: "정액정률구분코드",
    length: 1,
  })
  fafrDvcd: string | null;

  @Column("varchar", {
    name: "cttr_suga_clsf_cd",
    nullable: true,
    comment: "계약처수가분류코드",
    length: 6,
  })
  cttrSugaClsfCd: string | null;

  @Column("varchar", {
    name: "suga_cd",
    nullable: true,
    comment: "수가코드",
    length: 12,
  })
  sugaCd: string | null;

  @Column("int", {
    name: "pay_shar_nmvl",
    nullable: true,
    comment: "급여부담수치",
  })
  paySharNmvl: number | null;

  @Column("int", {
    name: "nopy_shar_nmvl",
    nullable: true,
    comment: "비급여부담수치",
  })
  nopySharNmvl: number | null;

  @Column("int", {
    name: "smcr_pay_shar_nmvl",
    nullable: true,
    comment: "선택진료급여부담수치",
  })
  smcrPaySharNmvl: number | null;

  @Column("int", {
    name: "smcr_nopy_shar_nmvl",
    nullable: true,
    comment: "선택진료비급여부담수치",
  })
  smcrNopySharNmvl: number | null;

  @Column("varchar", {
    name: "ctur_detl_nots",
    nullable: true,
    comment: "계약처미수납상세참고사항",
    length: 300,
  })
  cturDetlNots: string | null;

  @Column("varchar", {
    name: "atmt_ocrr_yn",
    nullable: true,
    comment: "자동발생여부",
    length: 1,
  })
  atmtOcrrYn: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
