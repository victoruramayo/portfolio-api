import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../../../auth/models/entities/profile.entity';
import { Portfolio } from './portfolio.entity';

@Entity('proyects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'timestamp', nullable: true })
  startDate?: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate?: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  url?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen?: string;

  @ManyToOne(() => Profile, (usuario) => usuario.projects)
  @JoinColumn({ name: 'id_profile' })
  profile: Profile;

  @ManyToOne(() => Portfolio, (p) => p.projects, { nullable: false })
  @JoinColumn()
  portfolio: Portfolio;

  @Column({ nullable: false })
  portfolioId: number;
}
