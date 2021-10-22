import { Column, Entity } from "typeorm";

@Entity("cbatinbant", { schema: "cli" })
export class Cbatinbant {
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

  @Column("varchar", {
    name: "trai_rcpn_date",
    nullable: true,
    comment: "자보접수일자",
    length: 8,
  })
  traiRcpnDate: string | null;

  @Column("varchar", {
    name: "trai_rcpn_no",
    nullable: true,
    comment: "자보접수번호",
    length: 9,
  })
  traiRcpnNo: string | null;

  @Column("varchar", {
    name: "trai_mngm_no",
    nullable: true,
    comment: "자보관리번호",
    length: 9,
  })
  traiMngmNo: string | null;

  @Column("varchar", {
    name: "trai_acdn_date",
    nullable: true,
    comment: "자보사고일자",
    length: 8,
  })
  traiAcdnDate: string | null;

  @Column("varchar", {
    name: "vhcl_no",
    nullable: true,
    comment: "차량번호",
    length: 20,
  })
  vhclNo: string | null;

  @Column("varchar", {
    name: "pymn_gurn_dvcd",
    nullable: true,
    comment: "지급보증구분코드",
    length: 2,
  })
  pymnGurnDvcd: string | null;

  @Column("int", {
    name: "pymn_limt_amt",
    nullable: true,
    comment: "지급한도금액",
  })
  pymnLimtAmt: number | null;

  @Column("varchar", {
    name: "prmt_apdy",
    nullable: true,
    comment: "승인적용일자",
    length: 8,
  })
  prmtApdy: string | null;

  @Column("varchar", {
    name: "prmt_endy",
    nullable: true,
    comment: "승인종료일자",
    length: 8,
  })
  prmtEndy: string | null;

  @Column("varchar", {
    name: "agrm_cmpl_date",
    nullable: true,
    comment: "합의완료일자",
    length: 8,
  })
  agrmCmplDate: string | null;

  @Column("varchar", {
    name: "trmn_yn",
    nullable: true,
    comment: "종결여부",
    length: 1,
  })
  trmnYn: string | null;

  @Column("varchar", {
    name: "trmn_date",
    nullable: true,
    comment: "종결일자",
    length: 8,
  })
  trmnDate: string | null;

  @Column("varchar", {
    name: "room_darg_apdy",
    nullable: true,
    comment: "병실차액인정적용일자",
    length: 8,
  })
  roomDargApdy: string | null;

  @Column("varchar", {
    name: "room_darg_endy",
    nullable: true,
    comment: "병실차액인정종료일자",
    length: 8,
  })
  roomDargEndy: string | null;

  @Column("varchar", {
    name: "pich_nm",
    nullable: true,
    comment: "담당자성명",
    length: 50,
  })
  pichNm: string | null;

  @Column("varchar", {
    name: "pich_tel",
    nullable: true,
    comment: "담당자전화번호",
    length: 12,
  })
  pichTel: string | null;

  @Column("varchar", {
    name: "trai_nots",
    nullable: true,
    comment: "자보참고사항",
    length: 200,
  })
  traiNots: string | null;

  @Column("varchar", {
    name: "trai_trmn_resn_cd",
    nullable: true,
    comment: "자보종결사유코드",
    length: 1,
  })
  traiTrmnResnCd: string | null;

  @Column("varchar", { name: "insr_rgno", comment: "보험자기호", length: 20 })
  insrRgno: string;
}
