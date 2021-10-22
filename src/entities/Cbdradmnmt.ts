import { Column, Entity } from "typeorm";

@Entity("cbdradmnmt", { schema: "cli" })
export class Cbdradmnmt {
  @Column("varchar", {
    primary: true,
    name: "hspt_cd",
    comment: "병원코드",
    length: 10,
  })
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
    name: "apdy",
    comment: "적용일자",
    length: 8,
  })
  apdy: string;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일자",
    length: 8,
  })
  endy: string | null;

  @Column("decimal", {
    name: "adtn_rate_1",
    nullable: true,
    comment: "가산율1",
    precision: 10,
    scale: 2,
  })
  adtnRate_1: string | null;

  @Column("decimal", {
    name: "adtn_rate_2",
    nullable: true,
    comment: "가산율2",
    precision: 10,
    scale: 2,
  })
  adtnRate_2: string | null;

  @Column("decimal", {
    name: "comd_amt_1",
    nullable: true,
    comment: "조제금액1",
    precision: 10,
    scale: 2,
  })
  comdAmt_1: string | null;

  @Column("decimal", {
    name: "comd_amt_2",
    nullable: true,
    comment: "조제금액2",
    precision: 10,
    scale: 2,
  })
  comdAmt_2: string | null;
}
