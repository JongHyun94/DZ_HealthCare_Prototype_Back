import { Column, Entity } from "typeorm";

@Entity("cbrommngmt", { schema: "cli" })
export class Cbrommngmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
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
    name: "ward_cd",
    comment: "병동코드",
    length: 6,
  })
  wardCd: string;

  @Column("varchar", {
    primary: true,
    name: "room_cd",
    comment: "병실코드",
    length: 5,
  })
  roomCd: string;

  @Column("varchar", {
    primary: true,
    name: "room_strt_date",
    comment: "병실개시일자",
    length: 8,
  })
  roomStrtDate: string;

  @Column("varchar", {
    name: "room_dvcd",
    nullable: true,
    comment: "병실구분코드",
    length: 2,
  })
  roomDvcd: string | null;

  @Column("varchar", {
    name: "room_grad_cd",
    nullable: true,
    comment: "병실등급코드",
    length: 2,
  })
  roomGradCd: string | null;

  @Column("varchar", {
    name: "sex_cd",
    nullable: true,
    comment: "성별코드",
    length: 1,
  })
  sexCd: string | null;

  @Column("int", { name: "bed_cnt", nullable: true, comment: "병상수" })
  bedCnt: number | null;

  @Column("int", { name: "bed_cnt_2", nullable: true, comment: "병상수2" })
  bedCnt_2: number | null;

  @Column("int", { name: "sths_pt_cnt", nullable: true, comment: "재원자수" })
  sthsPtCnt: number | null;

  @Column("int", {
    name: "dsch_prar_pt_cnt",
    nullable: true,
    comment: "퇴원예정자수",
  })
  dschPrarPtCnt: number | null;

  @Column("int", {
    name: "adms_prar_pt_cnt",
    nullable: true,
    comment: "입원예정자수",
  })
  admsPrarPtCnt: number | null;

  @Column("varchar", {
    name: "mdcr_dept_cd",
    nullable: true,
    comment: "진료과코드",
    length: 6,
  })
  mdcrDeptCd: string | null;

  @Column("varchar", {
    name: "room_tel",
    nullable: true,
    comment: "병실전화번호",
    length: 30,
  })
  roomTel: string | null;

  @Column("varchar", {
    name: "room_endy",
    nullable: true,
    comment: "병실종료일자",
    length: 8,
  })
  roomEndy: string | null;

  @Column("varchar", {
    name: "room_nm",
    nullable: true,
    comment: "병실명",
    length: 50,
  })
  roomNm: string | null;

  @Column("varchar", {
    name: "ward_nm",
    nullable: true,
    comment: "병동명",
    length: 50,
  })
  wardNm: string | null;

  @Column("int", { name: "ward_seq", nullable: true, comment: "병동순서" })
  wardSeq: number | null;

  @Column("varchar", {
    name: "nrsn_team",
    nullable: true,
    comment: "간호팀",
    length: 1,
  })
  nrsnTeam: string | null;

  @Column("varchar", {
    name: "type_asst_cd",
    nullable: true,
    comment: "유형보조코드",
    length: 2,
  })
  typeAsstCd: string | null;

  @Column("varchar", {
    name: "sub_type_asst_cd",
    nullable: true,
    comment: "SUB유형보조코드",
    length: 50,
  })
  subTypeAsstCd: string | null;

  @Column("varchar", {
    name: "free_room_yn",
    nullable: true,
    comment: "무료병실여부",
    length: 1,
  })
  freeRoomYn: string | null;

  @Column("varchar", {
    name: "etnl_dept",
    nullable: true,
    comment: "외부연동부서",
    length: 20,
  })
  etnlDept: string | null;

  @Column("varchar", {
    name: "adtl_room_yn",
    nullable: true,
    comment: "추가병실여부",
    length: 1,
  })
  adtlRoomYn: string | null;

  @Column("varchar", {
    name: "srvc_aply_yn",
    nullable: true,
    comment: "서비스적용여부",
    length: 1,
  })
  srvcAplyYn: string | null;

  @Column("varchar", {
    name: "nent_aply_yn",
    nullable: true,
    comment: "신생아 적용여부",
    length: 1,
  })
  nentAplyYn: string | null;
}
