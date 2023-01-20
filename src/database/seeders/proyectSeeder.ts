import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Profile } from '../../auth/models/entities/profile.entity';
import { Proyect } from '../../portfolio/models/entities/proyect.entity';

export class ProyectSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const profileRepository = dataSource.getRepository(Profile);
    const proyectSeederFactory = factoryManager.get(Proyect);
    const profile = profileRepository.create({ id: 1 });

    await proyectSeederFactory.saveMany(5, { profile });
  }
}
