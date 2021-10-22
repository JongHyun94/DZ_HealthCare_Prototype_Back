import { Column, Entity } from "typeorm";

@Entity("cbinmdinnt", { schema: "cli" })
export class Cbinmdinnt {
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
    name: "incs_mddp_sqno",
    comment: "산재진료부서일련번호",
  })
  incsMddpSqno: number;

  @Column("varchar", {
    name: "incs_mddp_cd",
    nullable: true,
    comment: "산재진료부서코드",
    length: 10,
  })
  incsMddpCd: string | null;
}
