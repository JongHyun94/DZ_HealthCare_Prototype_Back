import { Column, Entity } from "typeorm";

@Entity("cbindginnt", { schema: "cli" })
export class Cbindginnt {
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
    name: "incs_dgns_sqno",
    comment: "산재진단일련번호",
  })
  incsDgnsSqno: number;

  @Column("varchar", {
    name: "dgns_site_cd",
    nullable: true,
    comment: "진단부위코드",
    length: 1,
  })
  dgnsSiteCd: string | null;

  @Column("varchar", {
    name: "dnfr_cd",
    nullable: true,
    comment: "치식코드",
    length: 32,
  })
  dnfrCd: string | null;

  @Column("int", { name: "dgns_cd", nullable: true, comment: "진단코드" })
  dgnsCd: number | null;

  @Column("varchar", {
    name: "dgns_prmt_date",
    nullable: true,
    comment: "진단승인일자",
    length: 8,
  })
  dgnsPrmtDate: string | null;
}
