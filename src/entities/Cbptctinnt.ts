import { Column, Entity } from "typeorm";

@Entity("cbptctinnt", { schema: "cli" })
export class Cbptctinnt {
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
    name: "cttr_unrc_cd",
    comment: "계약처미수납코드",
    length: 4,
  })
  cttrUnrcCd: string;

  @Column("varchar", {
    primary: true,
    name: "pt_cttr_apdy",
    comment: "환자계약처적용일자",
    length: 8,
  })
  ptCttrApdy: string;

  @Column("varchar", {
    name: "pt_cttr_endy",
    nullable: true,
    comment: "환자계약처종료일자",
    length: 8,
  })
  ptCttrEndy: string | null;

  @Column("varchar", {
    name: "cttr_nots",
    nullable: true,
    comment: "계약처참고사항",
    length: 300,
  })
  cttrNots: string | null;

  @Column("varchar", {
    name: "uncl_clam_cttr_cd",
    nullable: true,
    comment: "미수청구계약처코드",
    length: 10,
  })
  unclClamCttrCd: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
