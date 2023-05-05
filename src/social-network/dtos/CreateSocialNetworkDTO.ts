import { IsEnum, IsString, IsUrl } from 'class-validator';
import { SocialType } from '../models/SocialNetwork.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSocialNetworkDTO {
  @IsString()
  @ApiProperty({ description: 'Nombre de tu red social' })
  readonly name: string;
  @IsEnum(SocialType)
  @ApiProperty({ description: 'Tipo de red social', enum: SocialType })
  readonly type: SocialType;
  @IsUrl()
  @ApiProperty({ description: 'Url de redireccionamiento' })
  readonly url: string;
}
