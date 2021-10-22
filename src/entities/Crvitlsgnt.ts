import { Column, Entity } from "typeorm";

@Entity("crvitlsgnt", { schema: "cli" })
export class Crvitlsgnt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
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

  @Column("varchar", { name: "pid", comment: "환자등록번호", length: 20 })
  pid: string;

  @Column("varchar", { primary: true, name: "inpt_dt", comment: "입력일시", length: 50 })
  inptDt: string;

  @Column("int", { name: "sbp", nullable: true, comment: "수축기 혈압" })
  sbp: number | null;

  @Column("int", { name: "dbp", nullable: true, comment: "이완기 혈압" })
  dbp: number | null;

  @Column("int", { name: "pr", nullable: true, comment: "맥박" })
  pr: number | null;

  @Column("int", { name: "rr", nullable: true, comment: "호흡" })
  rr: number | null;

  @Column("decimal", {
    name: "bt",
    nullable: true,
    comment: "체온",
    precision: 3,
    scale: 3,
  })
  bt: string | null;

  @Column("int", { name: "fbs", nullable: true, comment: "혈당" })
  fbs: number | null;

  @Column("decimal", {
    name: "hght",
    nullable: true,
    comment: "신장",
    precision: 3,
    scale: 2,
  })
  hght: string | null;

  @Column("varchar", {
    name: "wght",
    nullable: true,
    comment: "체중",
    length: 10,
  })
  wght: string | null;

  @Column("decimal", {
    name: "bmi",
    nullable: true,
    comment: "BMI",
    precision: 2,
    scale: 2,
  })
  bmi: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;
}
