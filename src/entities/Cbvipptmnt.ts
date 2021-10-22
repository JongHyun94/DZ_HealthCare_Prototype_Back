import { Column, Entity } from "typeorm";

@Entity("cbvipptmnt", { schema: "cli" })
export class Cbvipptmnt {
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

  @Column("varchar", {
    primary: true,
    name: "vip_aply_rang_cd",
    comment: "VIP적용범위코드",
    length: 2,
  })
  vipAplyRangCd: string;

  @Column("varchar", {
    primary: true,
    name: "vip_apdy",
    comment: "VIP적용일자",
    length: 8,
  })
  vipApdy: string;

  @Column("varchar", {
    name: "vip_endy",
    nullable: true,
    comment: "VIP종료일자",
    length: 8,
  })
  vipEndy: string | null;

  @Column("varchar", {
    name: "vip_yn",
    nullable: true,
    comment: "VIP여부",
    length: 1,
  })
  vipYn: string | null;

  @Column("varchar", {
    name: "vip_grad",
    nullable: true,
    comment: "VIP등급",
    length: 2,
  })
  vipGrad: string | null;

  @Column("varchar", {
    name: "vip_memo_cnts",
    nullable: true,
    comment: "VIP메모내용",
    length: 1000,
  })
  vipMemoCnts: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;
}
