import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { SocialNetwork } from '../../social-network/models/SocialNetwork.entity';

export class SocialNetworkSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const socialFactory = factoryManager.get(SocialNetwork);
    await socialFactory.saveMany(3, { profileId: 1 });
  }
}
