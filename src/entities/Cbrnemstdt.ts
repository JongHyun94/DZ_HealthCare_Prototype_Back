import { Column, Entity } from "typeorm";

@Entity("cbrnemstdt", { schema: "cli" })
export class Cbrnemstdt {
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
    name: "rne_cd",
    comment: "감면코드",
    length: 4,
  })
  rneCd: string;

  @Column("int", {
    primary: true,
    name: "rne_detl_sqno",
    comment: "감면상세일련번호",
  })
  rneDetlSqno: number;

  @Column("varchar", {
    name: "rne_detl_apdy",
    nullable: true,
    comment: "감면상세적용일자",
    length: 8,
  })
  rneDetlApdy: string | null;

  @Column("varchar", {
    name: "rne_detl_endy",
    nullable: true,
    comment: "감면상세종료일자",
    length: 8,
  })
  rneDetlEndy: string | null;

  @Column("varchar", {
    name: "fxam_fxrt_dvcd",
    nullable: true,
    comment: "정액정률구분코드",
    length: 1,
  })
  fxamFxrtDvcd: string | null;

  @Column("varchar", {
    name: "rne_mdcr_dvcd",
    nullable: true,
    comment: "감면진료구분코드",
    length: 1,
  })
  rneMdcrDvcd: string | null;

  @Column("varchar", {
    name: "mddp_dnts_dvcd",
    nullable: true,
    comment: "의과치과구분코드",
    length: 1,
  })
  mddpDntsDvcd: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 10,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "rne_suga_clsf_cd",
    nullable: true,
    comment: "감면수가분류코드",
    length: 6,
  })
  rneSugaClsfCd: string | null;

  @Column("varchar", {
    name: "suga_cd",
    nullable: true,
    comment: "수가코드",
    length: 12,
  })
  sugaCd: string | null;

  @Column("int", {
    name: "pay_rne_nmvl",
    nullable: true,
    comment: "급여감면수치",
  })
  payRneNmvl: number | null;

  @Column("int", {
    name: "nopy_rne_nmvl",
    nullable: true,
    comment: "비급여감면수치",
  })
  nopyRneNmvl: number | null;

  @Column("varchar", {
    name: "rne_detl_nots",
    nullable: true,
    comment: "감면상세참고사항",
    length: 300,
  })
  rneDetlNots: string | null;

  @Column("varchar", {
    name: "hstr_stat_cd",
    nullable: true,
    comment: "이력상태코드",
    length: 1,
  })
  hstrStatCd: string | null;
}
