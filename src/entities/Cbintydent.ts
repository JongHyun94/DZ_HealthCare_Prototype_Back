import { Column, Entity } from "typeorm";

@Entity("cbintydent", { schema: "cli" })
export class Cbintydent {
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
    name: "insn_tycd",
    comment: "보험유형코드",
    length: 4,
  })
  insnTycd: string;

  @Column("varchar", {
    primary: true,
    name: "type_asst_cd",
    comment: "유형보조코드",
    length: 4,
  })
  typeAsstCd: string;

  @Column("int", { primary: true, name: "strt_age", comment: "시작연령" })
  strtAge: number;

  @Column("varchar", {
    primary: true,
    name: "suga_clsf_cd",
    comment: "수가분류코드",
    length: 6,
  })
  sugaClsfCd: string;

  @Column("varchar", {
    primary: true,
    name: "spfm_excp_resn_cd",
    comment: "의약분업예외사유코드",
    length: 2,
  })
  spfmExcpResnCd: string;

  @Column("varchar", {
    primary: true,
    name: "suga_cd",
    comment: "수가코드",
    length: 12,
  })
  sugaCd: string;

  @Column("varchar", {
    primary: true,
    name: "inty_detl_apdy",
    comment: "보험유형상세적용일자",
    length: 8,
  })
  intyDetlApdy: string;

  @Column("int", { name: "end_age", nullable: true, comment: "종료연령" })
  endAge: number | null;

  @Column("varchar", {
    name: "inty_detl_endy",
    nullable: true,
    comment: "보험유형상세종료일자",
    length: 8,
  })
  intyDetlEndy: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;

  @Column("int", {
    name: "oppy_usch_rate",
    nullable: true,
    comment: "외래급여본인부담율",
  })
  oppyUschRate: number | null;

  @Column("varchar", {
    name: "oppy_fafr_dvcd",
    nullable: true,
    comment: "외래급여정액정률구분코드",
    length: 1,
  })
  oppyFafrDvcd: string | null;

  @Column("varchar", {
    name: "adms_otpt_dvcd",
    comment: "입원외래구분코드",
    length: 1,
  })
  admsOtptDvcd: string;
}
