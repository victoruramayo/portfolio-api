import { setSeederFactory } from 'typeorm-extension';

import {
  Project,
  ProjectType,
} from '../../portfolio/models/entities/project.entity';

export const ProfileFactory = setSeederFactory(Project, (faker) => {
  const p = new Project();
  p.name = faker.name.jobTitle();
  p.description = faker.name.jobDescriptor();
  p.startDate = faker.date.recent();
  p.endDate = faker.date.soon();
  p.url = faker.internet.url();
  p.imagen = faker.image.imageUrl();
  p.types = faker.helpers.arrayElements(Object.values(ProjectType));
  return p;
});
