import { Column, Entity } from "typeorm";

@Entity("cbrnemstmt", { schema: "cli" })
export class Cbrnemstmt {
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
    name: "rne_cd",
    comment: "감면코드",
    length: 4,
  })
  rneCd: string;

  @Column("int", {
    primary: true,
    name: "rne_cd_sqno",
    comment: "감면코드일련번호",
  })
  rneCdSqno: number;

  @Column("varchar", {
    name: "rne_cd_nm",
    nullable: true,
    comment: "감면코드명",
    length: 100,
  })
  rneCdNm: string | null;

  @Column("varchar", {
    name: "rne_apdy",
    nullable: true,
    comment: "감면적용일자",
    length: 8,
  })
  rneApdy: string | null;

  @Column("varchar", {
    name: "rne_endy",
    nullable: true,
    comment: "감면종료일자",
    length: 8,
  })
  rneEndy: string | null;

  @Column("varchar", {
    name: "acnt_rne_yn",
    nullable: true,
    comment: "계정감면여부",
    length: 1,
  })
  acntRneYn: string | null;

  @Column("int", {
    name: "rne_cd_prnt_seq",
    nullable: true,
    comment: "감면코드출력순서",
  })
  rneCdPrntSeq: number | null;

  @Column("varchar", {
    name: "rne_cd_nots",
    nullable: true,
    comment: "감면코드참고사항",
    length: 300,
  })
  rneCdNots: string | null;

  @Column("varchar", {
    name: "bspn_cd",
    nullable: true,
    comment: "거래처코드",
    length: 10,
  })
  bspnCd: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
