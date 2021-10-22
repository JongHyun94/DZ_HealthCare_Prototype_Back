import { Column, Entity } from "typeorm";

@Entity("cbmdqlrsnt", { schema: "cli" })
export class Cbmdqlrsnt {
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

  @Column("varchar", { name: "pid", comment: "환자등록번호", length: 10 })
  pid: string;

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

  @Column("varchar", {
    name: "qlfc_dvcd",
    nullable: true,
    comment: "자격구분코드",
    length: 1,
  })
  qlfcDvcd: string | null;

  @Column("varchar", {
    name: "qlfc_acqs_date",
    nullable: true,
    comment: "자격취득일자",
    length: 8,
  })
  qlfcAcqsDate: string | null;

  @Column("varchar", {
    name: "hshl_nm",
    nullable: true,
    comment: "세대주성명",
    length: 50,
  })
  hshlNm: string | null;

  @Column("varchar", {
    name: "incd_no",
    nullable: true,
    comment: "보험증번호",
    length: 20,
  })
  incdNo: string | null;

  @Column("varchar", {
    name: "pay_lmtd_date",
    nullable: true,
    comment: "급여제한일자",
    length: 8,
  })
  payLmtdDate: string | null;

  @Column("varchar", {
    name: "usch_dvcd",
    nullable: true,
    comment: "본인부담구분코드",
    length: 4,
  })
  uschDvcd: string | null;

  @Column("int", {
    name: "hllf_mncs_rmnd_amt",
    nullable: true,
    comment: "건강생활유지비잔여금액",
  })
  hllfMncsRmndAmt: number | null;

  @Column("varchar", {
    name: "dspp_rgdy",
    nullable: true,
    comment: "장애인등록일자",
    length: 8,
  })
  dsppRgdy: string | null;

  @Column("varchar", {
    name: "rrns_tgps_cnts",
    nullable: true,
    comment: "희귀대상자내용",
    length: 45,
  })
  rrnsTgpsCnts: string | null;

  @Column("varchar", {
    name: "pnmw_tgps_cnts",
    nullable: true,
    comment: "산전산모대상자내용",
    length: 91,
  })
  pnmwTgpsCnts: string | null;

  @Column("varchar", {
    name: "sclw_tgps_cnts",
    nullable: true,
    comment: "차상위대상자내용",
    length: 21,
  })
  sclwTgpsCnts: string | null;

  @Column("varchar", {
    name: "sevr_cncr_rttp_cnts",
    nullable: true,
    comment: "중증암등록대상자내용",
    length: 40,
  })
  sevrCncrRttpCnts: string | null;
}
