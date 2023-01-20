import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../auth/models/entities/user.entity';
import { Profile } from '../../auth/models/entities/profile.entity';

export class ProfileSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const repo = dataSource.getRepository(User);
    const userInfofactory = factoryManager.get(Profile);

    await userInfofactory.save({
      id: 1,
      user: repo.create({ id: '95857e00-61af-4d1c-bffd-082c230ddece' }),
    });
  }
}
