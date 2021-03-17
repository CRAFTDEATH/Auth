import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column()
  roles: string
}
