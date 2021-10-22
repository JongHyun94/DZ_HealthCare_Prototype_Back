import { Column, Entity } from "typeorm";

@Entity("cbmdmcmnmt", { schema: "cli" })
export class Cbmdmcmnmt {
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

  @Column("int", { primary: true, name: "sqno", comment: "일련번호" })
  sqno: number;

  @Column("varchar", {
    name: "mdcr_dpmt_cd",
    nullable: true,
    comment: "진료과코드",
    length: 10,
  })
  mdcrDpmtCd: string | null;

  @Column("varchar", {
    name: "fvnr_dvcd",
    nullable: true,
    comment: "초재진구분코드",
    length: 1,
  })
  fvnrDvcd: string | null;

  @Column("varchar", {
    name: "apdy",
    nullable: true,
    comment: "적용일자",
    length: 8,
  })
  apdy: string | null;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일자",
    length: 8,
  })
  endy: string | null;

  @Column("varchar", {
    name: "suga_cd",
    nullable: true,
    comment: "수가코드",
    length: 15,
  })
  sugaCd: string | null;
}
