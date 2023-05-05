import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ApiHideProperty, ApiResponseProperty } from '@nestjs/swagger';

@Entity('profiles')
export class Profile {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ nullable: false })
  username: string;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  names: string;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  paternalSurname: string;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  maternalSurname?: string;

  @ApiResponseProperty()
  @Column({ type: 'timestamp', nullable: true })
  brithDay?: Date;

  @ApiResponseProperty()
  @Column({ type: 'text', nullable: true })
  aboutMe: string;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  jobPosition: string;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  imageUrl: string;

  @ApiResponseProperty()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  public createdAt: Date;

  @ApiResponseProperty()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  public updatedAt: Date;

  @ApiHideProperty()
  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;
}
