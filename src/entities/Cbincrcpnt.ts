import { Column, Entity } from "typeorm";

@Entity("cbincrcpnt", { schema: "cli" })
export class Cbincrcpnt {
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
    name: "incs_rcpy_sqno",
    comment: "산재요양급여일련번호",
  })
  incsRcpySqno: number;

  @Column("varchar", {
    name: "incs_rcpy_dvcd",
    nullable: true,
    comment: "산재요양급여구분코드",
    length: 2,
  })
  incsRcpyDvcd: string | null;

  @Column("varchar", {
    name: "incs_rcpy_cldy",
    nullable: true,
    comment: "산재요양급여청구일자",
    length: 8,
  })
  incsRcpyCldy: string | null;

  @Column("varchar", {
    name: "incs_rcpy_apdy",
    nullable: true,
    comment: "산재요양급여적용일자",
    length: 8,
  })
  incsRcpyApdy: string | null;

  @Column("varchar", {
    name: "incs_rcpy_endy",
    nullable: true,
    comment: "산재요양급여종료일자",
    length: 8,
  })
  incsRcpyEndy: string | null;
}
