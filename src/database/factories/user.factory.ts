import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../auth/models/entities/user.entity';

export const UserFactory = setSeederFactory(User, (faker) => {
  const soonDate = faker.date.soon(1);
  const user = new User();
  user.id = faker.unique(faker.datatype.uuid);
  user.email = faker.unique(faker.internet.email);
  user.encryptedPassword = faker.internet.password(20, true, /[A-Z]/);
  user.emailConfirmedAt = soonDate;
  user.invitedAt = new Date();
  user.confirmationSentAt = soonDate;
  user.lastSignInAt = faker.date.recent();
  return user;
});
