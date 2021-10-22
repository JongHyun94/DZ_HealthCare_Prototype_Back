import { Column, Entity } from "typeorm";

@Entity("cbptnoinmt", { schema: "cli" })
export class Cbptnoinmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 10 })
  hsptCd: string;

  @Column("varchar", {
    primary: true,
    name: "sqno_dvsn",
    comment: "순번구분",
    length: 5,
  })
  sqnoDvsn: string;

  @Column("int", { name: "sqno", comment: "순번" })
  sqno: number;

  @Column("int", { name: "lngt", comment: "길이" })
  lngt: number;

  @Column("varchar", {
    name: "prefix",
    nullable: true,
    comment: "접두어",
    length: 5,
  })
  prefix: string | null;

  @Column("varchar", {
    name: "date_frmt",
    nullable: true,
    comment: "날짜형식",
    length: 8,
  })
  dateFrmt: string | null;

  @Column("varchar", {
    name: "last_pid",
    nullable: true,
    comment: "최종환자등록번호",
    length: 20,
  })
  lastPid: string | null;

  @Column("varchar", {
    name: "sqno_expl",
    nullable: true,
    comment: "순번설명",
    length: 50,
  })
  sqnoExpl: string | null;
}
