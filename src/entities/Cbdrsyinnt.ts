import { Column, Entity } from "typeorm";

@Entity("cbdrsyinnt", { schema: "cli" })
export class Cbdrsyinnt {
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
    name: "mdcr_dr_id",
    comment: "진료의사ID",
    length: 20,
  })
  mdcrDrId: string;

  @Column("int", { primary: true, name: "symp_sqno", comment: "증상일련번호" })
  sympSqno: number;

  @Column("varchar", {
    name: "symp_cd",
    nullable: true,
    comment: "증상코드",
    length: 20,
  })
  sympCd: string | null;

  @Column("varchar", {
    name: "mdcr_dept_cd",
    nullable: true,
    comment: "진료부서코드",
    length: 10,
  })
  mdcrDeptCd: string | null;

  @Column("varchar", {
    name: "symp_apdy",
    nullable: true,
    comment: "증상적용일자",
    length: 8,
  })
  sympApdy: string | null;

  @Column("varchar", {
    name: "symp_endy",
    nullable: true,
    comment: "증상종료일자",
    length: 8,
  })
  sympEndy: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
