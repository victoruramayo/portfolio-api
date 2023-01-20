import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Portfolio } from '../../portfolio/models/entities/portfolio.entity';
import { Profile } from '../../auth/models/entities/profile.entity';

export class PortfolioSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const portFactory = factoryManager.get(Portfolio);
    const repoUserInfo = dataSource.getRepository(Profile);
    await portFactory.saveMany(3, { profile: repoUserInfo.create({ id: 1 }) });
  }
}
