import { setSeederFactory } from 'typeorm-extension';

import { Proyect } from '../../portfolio/models/entities/proyect.entity';

export const ProfileFactory = setSeederFactory(Proyect, (faker) => {
  const p = new Proyect();
  p.name = faker.name.jobTitle();
  p.description = faker.name.jobDescriptor();
  p.startDate = faker.date.recent();
  p.endDate = faker.date.soon();
  p.url = faker.internet.url();
  p.imagen = faker.image.imageUrl();
  return p;
});
