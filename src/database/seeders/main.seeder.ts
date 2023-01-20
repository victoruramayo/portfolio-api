import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UserSeeder } from './user.seeder';
import { DataSource } from 'typeorm';
import { PortfolioSeeder } from './portfolio.seeder';
import { ProfileSeeder } from './profileSeeder';
import { ProyectSeeder } from './proyectSeeder';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, UserSeeder);
    await runSeeder(dataSource, ProfileSeeder);
    await runSeeder(dataSource, PortfolioSeeder);
    await runSeeder(dataSource, ProyectSeeder);
  }
}
