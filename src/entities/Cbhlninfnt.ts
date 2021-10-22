import { Column, Entity } from "typeorm";

@Entity("cbhlninfnt", { schema: "cli" })
export class Cbhlninfnt {
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

  @Column("varchar", {
    primary: true,
    name: "qlfc_apdy",
    comment: "자격적용일자",
    length: 8,
  })
  qlfcApdy: string;

  @Column("varchar", {
    name: "qlfc_endy",
    nullable: true,
    comment: "자격종료일자",
    length: 8,
  })
  qlfcEndy: string | null;

  @Column("varchar", {
    name: "incd_no",
    nullable: true,
    comment: "보험증번호",
    length: 20,
  })
  incdNo: string | null;

  @Column("varchar", {
    name: "inpn_nm",
    nullable: true,
    comment: "피보험자성명",
    length: 50,
  })
  inpnNm: string | null;

  @Column("varchar", {
    name: "inpn_frrn",
    nullable: true,
    comment: "피보험자주민등록앞번호",
    length: 6,
  })
  inpnFrrn: string | null;

  @Column("varchar", {
    name: "inpn_srrn",
    nullable: true,
    comment: "피보험자주민등록뒷번호",
    length: 7,
  })
  inpnSrrn: string | null;

  @Column("varchar", {
    name: "rltn_cd",
    nullable: true,
    comment: "관계코드",
    length: 2,
  })
  rltnCd: string | null;

  @Column("varchar", {
    name: "usch_dvcd",
    nullable: true,
    comment: "본인부담구분코드",
    length: 4,
  })
  uschDvcd: string | null;

  @Column("varchar", {
    name: "optn_hspt_cd",
    nullable: true,
    comment: "선택병원코드",
    length: 10,
  })
  optnHsptCd: string | null;

  @Column("varchar", {
    name: "optn_hspt_cd_nm",
    nullable: true,
    comment: "선택병원코드명",
    length: 50,
  })
  optnHsptCdNm: string | null;

  @Column("varchar", { name: "insr_rgno", comment: "보험자기호", length: 20 })
  insrRgno: string;
}
