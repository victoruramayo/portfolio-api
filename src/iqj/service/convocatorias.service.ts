import { Injectable } from '@nestjs/common';
import convocatorias from './dao/convocatorias.json';

@Injectable()
export class ConvocatoriasService {
  getAll() {
    return convocatorias;
  }
}
