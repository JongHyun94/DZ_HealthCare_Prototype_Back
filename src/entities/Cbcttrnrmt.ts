import { Column, Entity } from "typeorm";

@Entity("cbcttrnrmt", { schema: "cli" })
export class Cbcttrnrmt {
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
    name: "cttr_unrc_cd",
    comment: "계약처미수납코드",
    length: 4,
  })
  cttrUnrcCd: string;

  @Column("int", {
    primary: true,
    name: "cttr_unrc_cd_sqno",
    comment: "계약처미수납코드일련번호",
  })
  cttrUnrcCdSqno: number;

  @Column("varchar", {
    name: "cttr_unrc_cd_nm",
    nullable: true,
    comment: "계약처미수납코드명",
    length: 50,
  })
  cttrUnrcCdNm: string | null;

  @Column("varchar", {
    name: "cttr_unrc_cd_apdy",
    nullable: true,
    comment: "계약처미수납코드적용일자",
    length: 8,
  })
  cttrUnrcCdApdy: string | null;

  @Column("varchar", {
    name: "cttr_unrc_cd_endy",
    nullable: true,
    comment: "계약처미수납코드종료일자",
    length: 8,
  })
  cttrUnrcCdEndy: string | null;

  @Column("varchar", {
    name: "cttr_unrc_tycd",
    nullable: true,
    comment: "계약처미수납유형코드",
    length: 2,
  })
  cttrUnrcTycd: string | null;

  @Column("varchar", {
    name: "cttr_unrc_cd_nots",
    nullable: true,
    comment: "계약처미수납코드참고사항",
    length: 300,
  })
  cttrUnrcCdNots: string | null;

  @Column("varchar", {
    name: "uncl_clam_cttr_cd",
    nullable: true,
    comment: "미수청구계약처코드",
    length: 10,
  })
  unclClamCttrCd: string | null;

  @Column("varchar", {
    name: "uncl_pich_id",
    nullable: true,
    comment: "미수담당자ID",
    length: 20,
  })
  unclPichId: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
