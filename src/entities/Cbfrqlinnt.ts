import { Column, Entity } from "typeorm";

@Entity("cbfrqlinnt", { schema: "cli" })
export class Cbfrqlinnt {
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
    name: "pspt_no",
    nullable: true,
    comment: "여권번호",
    length: 50,
  })
  psptNo: string | null;

  @Column("varchar", {
    name: "engl_addr",
    nullable: true,
    comment: "영문주소",
    length: 200,
  })
  englAddr: string | null;

  @Column("varchar", {
    name: "engl_nm",
    nullable: true,
    comment: "영문성명",
    length: 50,
  })
  englNm: string | null;

  @Column("varchar", {
    name: "last_enm",
    nullable: true,
    comment: "성영문명",
    length: 50,
  })
  lastEnm: string | null;

  @Column("varchar", {
    name: "mddl_enm",
    nullable: true,
    comment: "중간영문명",
    length: 50,
  })
  mddlEnm: string | null;

  @Column("varchar", {
    name: "frst_enm",
    nullable: true,
    comment: "첫영문명",
    length: 50,
  })
  frstEnm: string | null;

  @Column("varchar", {
    name: "qlfc_endy",
    nullable: true,
    comment: "자격종료일자",
    length: 8,
  })
  qlfcEndy: string | null;
}
