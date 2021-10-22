import { Column, Entity } from "typeorm";

@Entity("cbtimstumt", { schema: "cli" })
export class Cbtimstumt {
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

  @Column("int", { primary: true, name: "seq", comment: "순서" })
  seq: number;

  @Column("varchar", {
    name: "stup_dvsn",
    nullable: true,
    comment: "설정구분",
    length: 2,
  })
  stupDvsn: string | null;

  @Column("varchar", {
    name: "strt_time",
    nullable: true,
    comment: "시작시간",
    length: 8,
  })
  strtTime: string | null;

  @Column("varchar", {
    name: "end_time",
    nullable: true,
    comment: "종료시간",
    length: 8,
  })
  endTime: string | null;

  @Column("varchar", {
    name: "amt_aply_dvsn",
    nullable: true,
    comment: "금액적용구분",
    length: 2,
  })
  amtAplyDvsn: string | null;

  @Column("decimal", {
    name: "inpt_valu",
    nullable: true,
    comment: "입력값",
    precision: 15,
    scale: 2,
  })
  inptValu: string | null;
}
