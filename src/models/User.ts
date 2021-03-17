import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
export type UserStatusType = "activated" | "disabled"


@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column()
  name: string
  @Column()
  mail: string
  @Column()
  password: string
  @Column()
  roles_id: number
  @Column({
    type: "enum",
    enum: ["activated", "disabled"],
    default: "disabled"
  })
  status: UserStatusType



}
