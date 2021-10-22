import { Column, Entity } from "typeorm";

@Entity("cbulbainnt", { schema: "cli" })
export class Cbulbainnt {
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
    name: "uplm_bass_apdy",
    comment: "상한기준적용일자",
    length: 8,
  })
  uplmBassApdy: string;

  @Column("varchar", {
    name: "uplm_bass_endy",
    nullable: true,
    comment: "상한기준종료일자",
    length: 8,
  })
  uplmBassEndy: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;

  @Column("int", {
    name: "uplm_bass_amt",
    nullable: true,
    comment: "상한기준금액",
  })
  uplmBassAmt: number | null;

  @Column("int", {
    name: "uplm_bass_nomn",
    nullable: true,
    comment: "상한기준개월수",
  })
  uplmBassNomn: number | null;
}
