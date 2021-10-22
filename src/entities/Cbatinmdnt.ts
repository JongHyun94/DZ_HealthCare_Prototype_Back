import { Column, Entity } from "typeorm";

@Entity("cbatinmdnt", { schema: "cli" })
export class Cbatinmdnt {
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

  @Column("int", { primary: true, name: "trai_sqno", comment: "자보일련번호" })
  traiSqno: number;

  @Column("int", {
    primary: true,
    name: "trai_mddp_sqno",
    comment: "자보진료과일련번호",
  })
  traiMddpSqno: number;

  @Column("varchar", {
    name: "trai_mdcr_dept_cd",
    nullable: true,
    comment: "자보진료부서코드",
    length: 10,
  })
  traiMdcrDeptCd: string | null;
}
