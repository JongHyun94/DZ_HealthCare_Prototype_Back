import { Column, Entity } from "typeorm";

@Entity("cbinprinnt", { schema: "cli" })
export class Cbinprinnt {
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
    name: "insn_tycd",
    comment: "보험유형코드",
    length: 4,
  })
  insnTycd: string;

  @Column("int", { primary: true, name: "incs_sqno", comment: "산재일련번호" })
  incsSqno: number;

  @Column("int", {
    primary: true,
    name: "incs_prmt_sqno",
    comment: "산재승인일련번호",
  })
  incsPrmtSqno: number;

  @Column("varchar", {
    name: "incs_prmt_dvcd",
    nullable: true,
    comment: "산재승인구분코드",
    length: 2,
  })
  incsPrmtDvcd: string | null;

  @Column("varchar", {
    name: "prmt_apdy",
    nullable: true,
    comment: "승인적용일자",
    length: 8,
  })
  prmtApdy: string | null;

  @Column("varchar", {
    name: "prmt_endy",
    nullable: true,
    comment: "승인종료일자",
    length: 8,
  })
  prmtEndy: string | null;

  @Column("int", { name: "prmt_nody", nullable: true, comment: "승인일수" })
  prmtNody: number | null;

  @Column("varchar", {
    name: "mvot_hspt_nm",
    nullable: true,
    comment: "전출병원명",
    length: 20,
  })
  mvotHsptNm: string | null;

  @Column("varchar", {
    name: "mvin_hspt_nm",
    nullable: true,
    comment: "전입병원명",
    length: 20,
  })
  mvinHsptNm: string | null;
}
