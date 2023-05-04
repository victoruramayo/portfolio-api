import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UserSeeder } from './user.seeder';
import { DataSource } from 'typeorm';
import { PortfolioSeeder } from './portfolio.seeder';
import { ProfileSeeder } from './profileSeeder';
import { ProjectSeeder } from './projectSeeder';
import { SocialNetworkSeeder } from './socialNetwork.seeder';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, UserSeeder);
    await runSeeder(dataSource, ProfileSeeder);
    await runSeeder(dataSource, PortfolioSeeder);
    await runSeeder(dataSource, ProjectSeeder);
    await runSeeder(dataSource, SocialNetworkSeeder);
  }
}
