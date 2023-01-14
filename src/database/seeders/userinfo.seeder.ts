import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../auth/models/entities/user.entity';
import { UserInfo } from '../../auth/models/entities/userinfo.entity';

export class UserinfoSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepo = dataSource.getRepository(UserInfo);
    const repo = dataSource.getRepository(User);
    const userInfofactory = factoryManager.get(UserInfo);

    const userData = await userInfofactory.make({
      id: 1,
      user: repo.create({ id: '95857e00-61af-4d1c-bffd-082c230ddece' }),
    });
    const user = userRepo.create(userData);
    await userRepo.save(user);
  }
}
