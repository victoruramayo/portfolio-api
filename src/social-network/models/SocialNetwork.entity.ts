import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from '../../auth/models/entities/profile.entity';

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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'enum', enum: SocialType, nullable: false })
  type: SocialType;

  @Column({ type: 'varchar', length: 255, nullable: false })
  url: string;

  @ManyToOne(() => Profile, (usuario) => usuario.socialNetworks)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @Column({ nullable: false })
  profileId: number;
}
