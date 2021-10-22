import { Column, Entity } from "typeorm";

@Entity("cbptrninnt", { schema: "cli" })
export class Cbptrninnt {
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
    name: "rne_cd",
    comment: "감면코드",
    length: 4,
  })
  rneCd: string;

  @Column("varchar", {
    primary: true,
    name: "pt_rne_apdy",
    comment: "환자감면적용일자",
    length: 8,
  })
  ptRneApdy: string;

  @Column("varchar", {
    name: "pt_rne_endy",
    nullable: true,
    comment: "환자감면종료일자",
    length: 8,
  })
  ptRneEndy: string | null;

  @Column("varchar", {
    name: "rne_nots",
    nullable: true,
    comment: "감면참고사항",
    length: 300,
  })
  rneNots: string | null;

  @Column("varchar", {
    name: "rltn_empl_id",
    nullable: true,
    comment: "관계직원ID",
    length: 20,
  })
  rltnEmplId: string | null;

  @Column("varchar", {
    name: "rltn_cd",
    nullable: true,
    comment: "관계코드",
    length: 2,
  })
  rltnCd: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
