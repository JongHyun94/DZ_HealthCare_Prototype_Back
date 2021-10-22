import { Column, Entity } from "typeorm";

@Entity("cbapptinnt", { schema: "cli" })
export class Cbapptinnt {
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

  @Column("decimal", {
    primary: true,
    name: "apnt_rcpn_no",
    comment: "예약접수번호",
    precision: 22,
    scale: 0,
  })
  apntRcpnNo: string;

  @Column("varchar", {
    name: "pt_nm",
    nullable: true,
    comment: "환자성명",
    length: 50,
  })
  ptNm: string | null;

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
    name: "sex_cd",
    nullable: true,
    comment: "성별코드",
    length: 1,
  })
  sexCd: string | null;

  @Column("varchar", {
    name: "dobr",
    nullable: true,
    comment: "생년월일",
    length: 8,
  })
  dobr: string | null;

  @Column("varchar", {
    name: "cntc_tel",
    nullable: true,
    comment: "연락전화번호",
    length: 12,
  })
  cntcTel: string | null;

  @Column("varchar", {
    name: "clph_no",
    nullable: true,
    comment: "휴대폰번호",
    length: 12,
  })
  clphNo: string | null;

  @Column("varchar", {
    name: "pstl_no",
    nullable: true,
    comment: "우편번호",
    length: 6,
  })
  pstlNo: string | null;

  @Column("varchar", { name: "pstl_sqno", comment: "우편일련번호", length: 3 })
  pstlSqno: string;

  @Column("varchar", {
    name: "basc_addr",
    nullable: true,
    comment: "기본주소",
    length: 200,
  })
  bascAddr: string | null;

  @Column("varchar", {
    name: "detl_addr",
    nullable: true,
    comment: "상세주소",
    length: 200,
  })
  detlAddr: string | null;

  @Column("varchar", {
    name: "pid",
    nullable: true,
    comment: "환자등록번호",
    length: 10,
  })
  pid: string | null;

  @Column("varchar", {
    name: "rcpn_yn",
    nullable: true,
    comment: "접수여부",
    length: 2,
  })
  rcpnYn: string | null;

  @Column("date", {
    name: "apnt_rgdt",
    nullable: true,
    comment: "예약등록일시",
  })
  apntRgdt: string | null;

  @Column("varchar", {
    name: "sms_trms_excl_yn",
    nullable: true,
    comment: "SMS전송제외여부",
    length: 1,
  })
  smsTrmsExclYn: string | null;

  @Column("varchar", {
    name: "apnt_resn_cd",
    nullable: true,
    comment: "예약사유코드",
    length: 2,
  })
  apntResnCd: string | null;

  @Column("varchar", {
    name: "apnt_chng_kind_cd",
    nullable: true,
    comment: "예약변경종류코드",
    length: 2,
  })
  apntChngKindCd: string | null;

  @Column("varchar", {
    name: "apnt_mdcr_date",
    nullable: true,
    comment: "예약진료일자",
    length: 8,
  })
  apntMdcrDate: string | null;

  @Column("varchar", {
    name: "apnt_mdcr_hm",
    nullable: true,
    comment: "예약진료시분",
    length: 4,
  })
  apntMdcrHm: string | null;

  @Column("varchar", {
    name: "apnt_mcrm_cd",
    nullable: true,
    comment: "예약진찰실코드",
    length: 10,
  })
  apntMcrmCd: string | null;

  @Column("varchar", {
    name: "apnt_mdcr_dept_cd",
    nullable: true,
    comment: "예약진료과코드",
    length: 10,
  })
  apntMdcrDeptCd: string | null;

  @Column("varchar", {
    name: "apnt_mdcr_dr_id",
    nullable: true,
    comment: "예약진료의사ID",
    length: 20,
  })
  apntMdcrDrId: string | null;

  @Column("varchar", {
    name: "apnt_path_dvcd",
    nullable: true,
    comment: "예약경로구분코드",
    length: 2,
  })
  apntPathDvcd: string | null;
}
