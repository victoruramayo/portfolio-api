import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../auth/models/entities/user.entity';
import { hash } from 'bcrypt';

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepo = dataSource.getRepository(User);
    const userData = {
      id: '95857e00-61af-4d1c-bffd-082c230ddece',
      aud: 'authenticated',
      role: 'authenticated',
      email: 'victoruramayo@gmail.com',
      encryptedPassword: await hash('pass123456', 10),
      emailConfirmedAt: '2023-01-08T23:16:22.819Z',
      invitedAt: '2023-01-08T23:16:06.143Z',
      confirmationToken: '',
      confirmationSentAt: '2023-01-08T23:16:06.143Z',
      recoveryToken: '',
      recoverySentAt: null,
      emailChangeTokenNew: '',
      emailChange: '',
      emailChangeSentAt: null,
      lastSignInAt: '2023-01-08T23:16:22.820Z',
    };
    const user = userRepo.create(userData);
    await userRepo.save(user);

    const userFactory = factoryManager.get(User);
    await userFactory.saveMany(5);
  }
}
