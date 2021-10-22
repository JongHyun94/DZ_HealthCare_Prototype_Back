import { Column, Entity } from "typeorm";

@Entity("cxusemngmt", { schema: "cli" })
export class Cxusemngmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 13 })
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
    name: "usid",
    comment: "사용자ID",
    length: 20,
  })
  usid: string;

  @Column("varchar", {
    name: "gvod_date",
    nullable: true,
    comment: "발령일자",
    length: 8,
  })
  gvodDate: string | null;

  @Column("varchar", {
    name: "user_nm",
    nullable: true,
    comment: "성명",
    length: 50,
  })
  userNm: string | null;

  @Column("varchar", {
    name: "user_enm",
    nullable: true,
    comment: "영문명",
    length: 50,
  })
  userEnm: string | null;

  @Column("varchar", {
    name: "rrno",
    nullable: true,
    comment: "주민등록번호",
    length: 20,
  })
  rrno: string | null;

  @Column("varchar", {
    name: "pw",
    nullable: true,
    comment: "비밀번호",
    length: 100,
  })
  pw: string | null;

  @Column("varchar", {
    name: "octy_cd",
    nullable: true,
    comment: "직종구분코드",
    length: 20,
  })
  octyCd: string | null;

  @Column("varchar", {
    name: "ocrs_cd",
    nullable: true,
    comment: "직책코드",
    length: 20,
  })
  ocrsCd: string | null;

  @Column("varchar", {
    name: "ocps_cd",
    nullable: true,
    comment: "직위코드",
    length: 20,
  })
  ocpsCd: string | null;

  @Column("varchar", {
    name: "lcno",
    nullable: true,
    comment: "면허번호",
    length: 35,
  })
  lcno: string | null;

  @Column("varchar", {
    name: "dr_lcno",
    nullable: true,
    comment: "의사면허번호",
    length: 35,
  })
  drLcno: string | null;

  @Column("varchar", {
    name: "spsb_fiel_cnts",
    nullable: true,
    comment: "전문분야내용",
    length: 600,
  })
  spsbFielCnts: string | null;

  @Column("varchar", {
    name: "otpt_mdcr_dr_yn",
    nullable: true,
    comment: "외래진료의사여부",
    length: 1,
  })
  otptMdcrDrYn: string | null;

  @Column("varchar", {
    name: "hlof_stat_dvcd",
    nullable: true,
    comment: "재직상태구분코드",
    length: 20,
  })
  hlofStatDvcd: string | null;

  @Column("varchar", {
    name: "dr_nurs_dvcd",
    nullable: true,
    comment: "의사간호사구분코드",
    length: 20,
  })
  drNursDvcd: string | null;

  @Column("varchar", {
    name: "tel",
    nullable: true,
    comment: "전화번호",
    length: 30,
  })
  tel: string | null;

  @Column("varchar", {
    name: "clph_no",
    nullable: true,
    comment: "휴대폰번호",
    length: 30,
  })
  clphNo: string | null;

  @Column("varchar", {
    name: "aply_endy",
    nullable: true,
    comment: "적용종료일자",
    length: 50,
  })
  aplyEndy: string | null;

  @Column("varchar", {
    name: "emal_addr",
    nullable: true,
    comment: "이메일주소",
    length: 320,
  })
  emalAddr: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;

  @Column("varchar", {
    name: "sign_img",
    nullable: true,
    comment: "서명이미지",
    length: 256,
  })
  signImg: string | null;

  @Column("varchar", {
    name: "sex_cd",
    nullable: true,
    comment: "성별코드",
    length: 1,
  })
  sexCd: string | null;

  @Column("char", {
    name: "trial149",
    nullable: true,
    comment: "TRIAL",
    length: 1,
  })
  trial149: string | null;
}
