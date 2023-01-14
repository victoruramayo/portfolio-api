import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserInfo } from './userinfo.entity';

export enum ApiTypeUser {
  APP = 'app',
  USER = 'user',
}
@Entity('api_keys')
export class Apikey {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 60, nullable: false })
  prefix: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  apiKey: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  public createdAt: Date;

  @Column()
  public expireAt: Date;

  @Column()
  public lastUsedAt: Date;

  @Column({
    type: 'enum',
    enum: ApiTypeUser,
  })
  public userApikey: ApiTypeUser;

  @ManyToOne(() => UserInfo, { nullable: false })
  public userInfo: UserInfo;
}
