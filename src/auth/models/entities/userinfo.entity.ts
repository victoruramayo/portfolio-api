import {
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from './user.entity';

export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  public updatedAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
