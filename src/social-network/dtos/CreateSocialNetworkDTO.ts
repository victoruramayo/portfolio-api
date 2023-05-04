import { IsEnum, IsString, IsUrl } from 'class-validator';
import { SocialType } from '../models/SocialNetwork.entity';

export class CreateSocialNetworkDTO {
  @IsString()
  readonly name: string;
  @IsEnum(SocialType)
  readonly type: SocialType;
  @IsUrl()
  readonly url: string;
}
