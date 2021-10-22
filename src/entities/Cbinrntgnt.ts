import { Column, Entity } from "typeorm";

@Entity("cbinrntgnt", { schema: "cli" })
export class Cbinrntgnt {
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
    name: "bspn_cd",
    comment: "거래처코드",
    length: 10,
  })
  bspnCd: string;

  @Column("varchar", {
    primary: true,
    name: "tgps_rrno",
    comment: "대상자주민등록번호",
    length: 13,
  })
  tgpsRrno: string;

  @Column("varchar", {
    name: "tgps_nm",
    nullable: true,
    comment: "대상자성명",
    length: 50,
  })
  tgpsNm: string | null;

  @Column("varchar", {
    name: "rne_cd",
    nullable: true,
    comment: "감면코드",
    length: 4,
  })
  rneCd: string | null;

  @Column("varchar", { name: "rne_apdy", comment: "감면적용일자", length: 8 })
  rneApdy: string;

  @Column("varchar", {
    name: "rne_endy",
    nullable: true,
    comment: "감면종료일자",
    length: 8,
  })
  rneEndy: string | null;

  @Column("varchar", {
    name: "rltn_prsn_rrno",
    nullable: true,
    comment: "관계자주민등록번호",
    length: 13,
  })
  rltnPrsnRrno: string | null;

  @Column("varchar", {
    name: "rltn_cd",
    nullable: true,
    comment: "관계코드",
    length: 2,
  })
  rltnCd: string | null;

  @Column("varchar", {
    name: "rne_nots",
    nullable: true,
    comment: "감면참고사항",
    length: 300,
  })
  rneNots: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
