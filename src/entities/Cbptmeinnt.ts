import { Column, Entity } from "typeorm";

@Entity("cbptmeinnt", { schema: "cli" })
export class Cbptmeinnt {
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
    name: "pid",
    comment: "환자등록번호",
    length: 10,
  })
  pid: string;

  @Column("int", {
    primary: true,
    name: "pt_memo_sqno",
    comment: "환자메모일련번호",
  })
  ptMemoSqno: number;

  @Column("varchar", {
    name: "memo_rang_cd",
    nullable: true,
    comment: "메모범위코드",
    length: 4,
  })
  memoRangCd: string | null;

  @Column("varchar", {
    name: "memo_cnts",
    nullable: true,
    comment: "메모내용",
    length: 3000,
  })
  memoCnts: string | null;

  @Column("varchar", {
    name: "memo_apdy",
    nullable: true,
    comment: "메모적용일자",
    length: 8,
  })
  memoApdy: string | null;

  @Column("varchar", {
    name: "memo_endy",
    nullable: true,
    comment: "메모종료일자",
    length: 8,
  })
  memoEndy: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;

  @Column("varchar", {
    name: "otpp_updt_psbl_yn",
    nullable: true,
    comment: "타인수정가능여부",
    length: 1,
  })
  otppUpdtPsblYn: string | null;
}
