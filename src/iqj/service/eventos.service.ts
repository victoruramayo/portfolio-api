import { Injectable } from '@nestjs/common';
import eventos from './dao/eventos.json';

@Injectable()
export class EventosService {
  getAll() {
    return eventos;
  }
}
