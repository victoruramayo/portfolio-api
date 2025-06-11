import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../../../auth/models/entities/profile.entity';
import { ApiResponseProperty, ApiHideProperty } from '@nestjs/swagger';

@Entity('skills')
export class Skill {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ApiResponseProperty()
  @Column({ type: 'int', nullable: true })
  percentage?: number; // Opcional: del 1 al 10, por ejemplo

  @ApiHideProperty()
  @ManyToOne(() => Profile, (profile) => profile.skills, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @ApiResponseProperty()
  @Column()
  profile_id: number;
}
