import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../../../auth/models/entities/profile.entity';
import { Project } from './project.entity';
import { ApiHideProperty, ApiResponseProperty } from '@nestjs/swagger';

@Entity('portfolios')
export class Portfolio {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ApiHideProperty()
  @ManyToOne(() => Profile, { nullable: false })
  profile: Profile;

  @ApiResponseProperty()
  @CreateDateColumn({
    type: 'timestamp',
  })
  public createdAt: Date;

  @ApiResponseProperty()
  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'now()',
  })
  public updatedAt: Date;

  @ApiHideProperty()
  @OneToMany(() => Project, (p) => p.portfolio)
  projects: Project[];
}
