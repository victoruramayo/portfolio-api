import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../../../auth/models/entities/profile.entity';

@Entity('proyects')
export class Proyect {
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

  @ManyToOne(() => Profile, (usuario) => usuario.proyects)
  @JoinColumn({ name: 'id_profile' })
  profile: Profile;
}
