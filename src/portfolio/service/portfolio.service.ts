import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  private readonly portfolios = [
    {
      id: 1,
      name: 'Portafolio 1',
    },
    {
      id: 2,
      name: 'Portafolio 2',
    },
    {
      id: 3,
      name: 'Portafolio 3',
    },
    {
      id: 4,
      name: 'Portafolio 4',
    },
  ];

  getAll() {
    return this.portfolios;
  }
}
