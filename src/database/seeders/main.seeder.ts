import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UserSeeder } from './user.seeder';
import { DataSource } from 'typeorm';
import { PortfolioSeeder } from './portfolio.seeder';
import { UserinfoSeeder } from './userinfo.seeder';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, UserSeeder);
    await runSeeder(dataSource, UserinfoSeeder);
    await runSeeder(dataSource, PortfolioSeeder);
  }
}
