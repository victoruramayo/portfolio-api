import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Profile } from '../../auth/models/entities/profile.entity';
import { Project } from '../../portfolio/models/entities/project.entity';

export class ProjectSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const profileRepository = dataSource.getRepository(Profile);
    const proyectSeederFactory = factoryManager.get(Project);
    const profile = profileRepository.create({ id: 1 });

    await proyectSeederFactory.saveMany(5, { profile });
  }
}
