import { Column, Entity } from "typeorm";

@Entity("cbptdsinnt", { schema: "cli" })
export class Cbptdsinnt {
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
    name: "pt_dspp_stdy",
    comment: "환자장애인시작일자",
    length: 8,
  })
  ptDsppStdy: string;

  @Column("varchar", {
    name: "dsbl_dvcd",
    nullable: true,
    comment: "장애구분코드",
    length: 2,
  })
  dsblDvcd: string | null;

  @Column("varchar", {
    name: "dsbl_grad_cd",
    nullable: true,
    comment: "장애등급코드",
    length: 2,
  })
  dsblGradCd: string | null;

  @Column("varchar", {
    name: "dspp_card_no",
    nullable: true,
    comment: "장애인카드번호",
    length: 15,
  })
  dsppCardNo: string | null;

  @Column("varchar", {
    name: "pt_dspp_endy",
    nullable: true,
    comment: "환자장애인종료일자",
    length: 8,
  })
  ptDsppEndy: string | null;
}
