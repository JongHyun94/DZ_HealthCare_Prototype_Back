import { Column, Entity } from "typeorm";

@Entity("cbmdqlrqnt", { schema: "cli" })
export class Cbmdqlrqnt {
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

  @Column("int", { primary: true, name: "rqst_sqno", comment: "요청일련번호" })
  rqstSqno: number;

  @Column("varchar", {
    name: "pt_frrn",
    nullable: true,
    comment: "환자주민등록앞번호",
    length: 6,
  })
  ptFrrn: string | null;

  @Column("varchar", {
    name: "pt_srrn",
    nullable: true,
    comment: "환자주민등록뒷번호",
    length: 7,
  })
  ptSrrn: string | null;

  @Column("varchar", {
    name: "pt_nm",
    nullable: true,
    comment: "환자성명",
    length: 50,
  })
  ptNm: string | null;

  @Column("varchar", {
    name: "mdad_inst_rgno",
    nullable: true,
    comment: "의료급여기관기호",
    length: 8,
  })
  mdadInstRgno: string | null;

  @Column("varchar", {
    name: "mdcr_date",
    nullable: true,
    comment: "진료일자",
    length: 8,
  })
  mdcrDate: string | null;

  @Column("date", {
    name: "data_inpt_dt",
    nullable: true,
    comment: "데이터입력일시",
  })
  dataInptDt: string | null;

  @Column("varchar", {
    name: "mesg_dlwt_stat_cd",
    nullable: true,
    comment: "메시지처리상태코드",
    length: 1,
  })
  mesgDlwtStatCd: string | null;

  @Column("varchar", {
    name: "mesg_tycd",
    nullable: true,
    comment: "메시지유형코드",
    length: 2,
  })
  mesgTycd: string | null;

  @Column("varchar", {
    name: "pich_frrn",
    nullable: true,
    comment: "담당자주민등록앞번호",
    length: 6,
  })
  pichFrrn: string | null;

  @Column("varchar", {
    name: "pich_srrn",
    nullable: true,
    comment: "담당자주민등록뒷번호",
    length: 7,
  })
  pichSrrn: string | null;
}
