import { Column, Entity } from "typeorm";

@Entity("cbintyinnt", { schema: "cli" })
export class Cbintyinnt {
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
    name: "insn_type_apdy",
    comment: "보험유형적용일자",
    length: 8,
  })
  insnTypeApdy: string;

  @Column("varchar", {
    name: "insn_type_endy",
    nullable: true,
    comment: "보험유형종료일자",
    length: 8,
  })
  insnTypeEndy: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;

  @Column("int", {
    name: "rpit_acad_rate",
    nullable: true,
    comment: "요양기관행위가산율",
  })
  rpitAcadRate: number | null;

  @Column("varchar", {
    name: "suga_aply_dvcd",
    nullable: true,
    comment: "수가적용구분코드",
    length: 2,
  })
  sugaAplyDvcd: string | null;

  @Column("varchar", {
    name: "insr_dvcd",
    nullable: true,
    comment: "보험자구분코드",
    length: 1,
  })
  insrDvcd: string | null;
}
