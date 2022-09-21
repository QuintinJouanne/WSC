import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Wilder from "../Wilder/Wilder.entity";

@Entity()
export default class School {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Index({ unique: true })
  schoolName: string;

  @OneToMany(() => Wilder, (wilder) => wilder.school)
  wilders: Wilder[];
}