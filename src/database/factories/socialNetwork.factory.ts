import { setSeederFactory } from 'typeorm-extension';
import {
  SocialNetwork,
  SocialType,
} from '../../social-network/models/SocialNetwork.entity';

export const SocialNetworkFactory = setSeederFactory(SocialNetwork, (faker) => {
  const s = new SocialNetwork();
  s.url = faker.internet.url();
  s.name = faker.company.bs();
  s.type = faker.helpers.arrayElement(Object.values(SocialType));
  return s;
});
