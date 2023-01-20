import { setSeederFactory } from 'typeorm-extension';
import { Profile } from '../../auth/models/entities/profile.entity';

export const ProfileFactory = setSeederFactory(Profile, (faker) => {
  const us = new Profile();
  us.username = faker.internet.userName();
  us.names = faker.name.firstName();
  us.paternalSurname = faker.name.lastName();
  us.brithDay = faker.date.birthdate();
  return us;
});
