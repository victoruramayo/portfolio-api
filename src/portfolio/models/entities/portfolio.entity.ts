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

@Entity('portfolios')
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ManyToOne(() => Profile, { nullable: false })
  profile: Profile;

  @CreateDateColumn({
    type: 'timestamp',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'now()',
  })
  public updatedAt: Date;

  @OneToMany(() => Project, (p) => p.portfolio)
  projects: Project[];
}
