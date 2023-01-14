import { setSeederFactory } from 'typeorm-extension';
import { UserInfo } from '../../auth/models/entities/userinfo.entity';

export const UserinfoFactory = setSeederFactory(UserInfo, (faker) => {
  const us = new UserInfo();
  us.username = faker.internet.userName();
  return us;
});
