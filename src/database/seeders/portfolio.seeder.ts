import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Portfolio } from '../../portfolio/models/entities/portfolio.entity';
import { UserInfo } from '../../auth/models/entities/userinfo.entity';

export class PortfolioSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const portFactory = factoryManager.get(Portfolio);
    const repo = dataSource.getRepository(Portfolio);
    const repoUserInfo = dataSource.getRepository(UserInfo);
    const p1 = await portFactory.make();
    p1.userInfo = repoUserInfo.create({ id: 1 });
    const p2 = await portFactory.make();
    p2.userInfo = repoUserInfo.create({ id: 1 });
    const p3 = await portFactory.make();
    p3.userInfo = repoUserInfo.create({ id: 1 });
    await repo.save(p1);
    await repo.save(p2);
    await repo.save(p3);
  }
}
