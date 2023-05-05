import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from '../../auth/models/entities/profile.entity';
import { ApiHideProperty, ApiResponseProperty } from '@nestjs/swagger';

export enum SocialType {
  FACEBOOK = 'Facebook',
  GITHUB = 'Github',
  LINKEDIN = 'LinkedIn',
  TWITTER = 'Twitter',
  YOUTUBE = 'Youtube',
  TWITCH = 'Twitch',
  INSTAGRAM = 'Instagram',
  WHATSAPP = 'Whatsapp',
  TELEGRAM = 'Telegram',
  OTHER = 'Other',
}

@Entity('social_networks')
export class SocialNetwork {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ApiResponseProperty()
  @Column({ type: 'enum', enum: SocialType, nullable: false })
  type: SocialType;

  @ApiResponseProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  url: string;

  @ApiHideProperty()
  @ManyToOne(() => Profile)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @ApiResponseProperty()
  @Column({ nullable: false })
  profileId: number;
}
