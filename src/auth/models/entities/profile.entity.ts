import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Proyect } from '../../../portfolio/models/entities/proyect.entity';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  names: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  paternalSurname: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  maternalSurname?: string;

  @Column({ type: 'timestamp', nullable: true })
  brithDay?: Date;

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

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;

  @OneToMany(() => Proyect, (p) => p.profile)
  proyects: Proyect[];
}
