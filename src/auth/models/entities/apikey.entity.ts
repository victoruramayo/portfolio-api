import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Portfolio } from '../../../portfolio/models/entities/portfolio.entity';

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

  @Column({ nullable: true })
  public expireAt?: Date;

  @Column({ nullable: true })
  public lastUsedAt?: Date;

  @Column({
    type: 'enum',
    enum: ApiTypeUser,
    nullable: false,
  })
  public userApikey: ApiTypeUser;

  @ManyToOne(() => Profile, { nullable: false })
  public profile: Profile;

  @ManyToOne(() => Portfolio, { nullable: false })
  public portfolio: Portfolio;
}
