import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
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
  prefix: string;

  name: string;
  apiKey: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  public createdAt: Date;

  public expireAt: Date;
  public lastUsedAt: Date;
  public userId: UserInfo;

  @Column({
    type: 'enum',
    enum: ApiTypeUser,
  })
  public userApike: ApiTypeUser;
}
