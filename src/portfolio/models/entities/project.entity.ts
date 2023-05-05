import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../../../auth/models/entities/profile.entity';
import { Portfolio } from './portfolio.entity';
import { ApiHideProperty, ApiResponseProperty } from '@nestjs/swagger';

@Entity('proyects')
export class Project {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ApiResponseProperty()
  @Column({ type: 'text', nullable: true })
  description?: string;

  @ApiResponseProperty()
  @Column({ type: 'timestamp', nullable: true })
  startDate?: Date;

  @ApiResponseProperty()
  @Column({ type: 'timestamp', nullable: true })
  endDate?: Date;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  url?: string;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen?: string;

  @ApiHideProperty()
  @ManyToOne(() => Profile)
  @JoinColumn({ name: 'id_profile' })
  profile: Profile;

  @ApiHideProperty()
  @ManyToOne(() => Portfolio, (p) => p.projects, { nullable: false })
  @JoinColumn()
  portfolio: Portfolio;

  @ApiResponseProperty()
  @Column({ nullable: false })
  portfolioId: number;
}
