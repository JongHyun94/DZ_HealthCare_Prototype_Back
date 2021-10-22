import { Column, Entity } from "typeorm";

@Entity("cbotrcinnt", { schema: "cli" })
export class Cbotrcinnt {
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
    name: "rcpn_dvcd",
    nullable: true,
    comment: "접수구분코드",
    length: 1,
  })
  rcpnDvcd: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;

  @Column("varchar", {
    name: "pid",
    nullable: true,
    comment: "환자등록번호",
    length: 10,
  })
  pid: string | null;

  @Column("varchar", {
    name: "mdcr_date",
    nullable: true,
    comment: "진료일자",
    length: 8,
  })
  mdcrDate: string | null;

  @Column("varchar", {
    name: "mdcr_hm",
    nullable: true,
    comment: "진료시분",
    length: 4,
  })
  mdcrHm: string | null;

  @Column("varchar", {
    name: "mcrm_cd",
    nullable: true,
    comment: "진찰실코드",
    length: 10,
  })
  mcrmCd: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 10,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "mdcr_dr_id",
    nullable: true,
    comment: "진료의사ID",
    length: 20,
  })
  mdcrDrId: string | null;

  @Column("varchar", {
    name: "mdcr_kind_cd",
    nullable: true,
    comment: "진료종류코드",
    length: 2,
  })
  mdcrKindCd: string | null;

  @Column("varchar", {
    name: "fvnr_dvcd",
    nullable: true,
    comment: "초재진구분코드",
    length: 2,
  })
  fvnrDvcd: string | null;

  @Column("varchar", {
    name: "rcpn_stat_cd",
    nullable: true,
    comment: "접수상태코드",
    length: 2,
  })
  rcpnStatCd: string | null;

  @Column("varchar", {
    name: "mdcr_yn",
    nullable: true,
    comment: "진료여부",
    length: 1,
  })
  mdcrYn: string | null;

  @Column("varchar", {
    name: "mcch_prpy_yn",
    nullable: true,
    comment: "진찰료선납여부",
    length: 1,
  })
  mcchPrpyYn: string | null;

  @Column("varchar", {
    name: "mcch_free_yn",
    nullable: true,
    comment: "진찰료무료여부",
    length: 1,
  })
  mcchFreeYn: string | null;

  @Column("varchar", {
    name: "mcch_free_resn_cd",
    nullable: true,
    comment: "진찰료무료사유코드",
    length: 2,
  })
  mcchFreeResnCd: string | null;

  @Column("varchar", {
    name: "mcch_mdng_adtn_yn",
    nullable: true,
    comment: "진찰료야간가산여부",
    length: 1,
  })
  mcchMdngAdtnYn: string | null;

  @Column("varchar", {
    name: "clcl_stat_cd",
    nullable: true,
    comment: "계산상태코드",
    length: 1,
  })
  clclStatCd: string | null;

  @Column("varchar", {
    name: "insn_tycd",
    nullable: true,
    comment: "보험유형코드",
    length: 4,
  })
  insnTycd: string | null;

  @Column("varchar", {
    name: "type_asst_cd",
    nullable: true,
    comment: "유형보조코드",
    length: 4,
  })
  typeAsstCd: string | null;

  @Column("varchar", {
    name: "type_asst_resn_cd",
    nullable: true,
    comment: "유형보조사유코드",
    length: 2,
  })
  typeAsstResnCd: string | null;

  @Column("varchar", {
    name: "rne_cd",
    nullable: true,
    comment: "감면코드",
    length: 4,
  })
  rneCd: string | null;

  @Column("varchar", {
    name: "cttr_unrc_cd",
    nullable: true,
    comment: "계약처미수납코드",
    length: 4,
  })
  cttrUnrcCd: string | null;

  @Column("varchar", {
    name: "pt_arvl_dt",
    nullable: true,
    comment: "환자도착일시",
    length: 50,
  })
  ptArvlDt: string | null;

  @Column("varchar", {
    name: "mdcr_stdt",
    nullable: true,
    comment: "진료시작일시",
    length: 50,
  })
  mdcrStdt: string | null;

  @Column("varchar", {
    name: "mdcr_endt",
    nullable: true,
    comment: "진료종료일시",
    length: 50,
  })
  mdcrEndt: string | null;

  @Column("varchar", {
    name: "mdcr_prgr_stat_cd",
    nullable: true,
    comment: "진료진행상태코드",
    length: 1,
  })
  mdcrPrgrStatCd: string | null;

  @Column("varchar", {
    name: "mdcr_hold_stat_cd",
    nullable: true,
    comment: "진료보류상태코드",
    length: 1,
  })
  mdcrHoldStatCd: string | null;

  @Column("int", { name: "wtng_sqno", nullable: true, comment: "대기일련번호" })
  wtngSqno: number | null;

  @Column("varchar", {
    name: "spfm_excp_resn_cd",
    nullable: true,
    comment: "의약분업예외사유코드",
    length: 2,
  })
  spfmExcpResnCd: string | null;

  @Column("varchar", {
    name: "mdcr_rffm_sbmt_yn",
    nullable: true,
    comment: "TRIAL진료의뢰서제출여부",
    length: 1,
  })
  mdcrRffmSbmtYn: string | null;

  @Column("varchar", {
    name: "shar_rate_dvcd",
    nullable: true,
    comment: "부담율구분코드",
    length: 1,
  })
  sharRateDvcd: string | null;

  @Column("varchar", {
    name: "mcch_rcpt_yn",
    nullable: true,
    comment: "진찰료수납여부",
    length: 1,
  })
  mcchRcptYn: string | null;

  @Column("int", { name: "need_time", nullable: true, comment: "소요시간" })
  needTime: number | null;

  @Column("varchar", {
    name: "rgst_prsn_id",
    nullable: true,
    comment: "등록자ID",
    length: 20,
  })
  rgstPrsnId: string | null;

  @Column("varchar", {
    name: "revw_stat_cd",
    nullable: true,
    comment: "심사상태코드",
    length: 1,
  })
  revwStatCd: string | null;

  @Column("int", {
    name: "tmpr_rcpn_no",
    nullable: true,
    comment: "임시접수번호",
  })
  tmprRcpnNo: number | null;
}
