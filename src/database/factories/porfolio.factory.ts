import { setSeederFactory } from 'typeorm-extension';
import { Portfolio } from '../../portfolio/models/entities/portfolio.entity';

export const PortfolioFactory = setSeederFactory(Portfolio, (faker) => {
  const port = new Portfolio();
  port.name = faker.name.jobTitle();
  return port;
});
