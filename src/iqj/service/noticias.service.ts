import { Injectable } from '@nestjs/common';
import noticias from './dao/noticias.json';

@Injectable()
export class NoticiasService {
  getAll() {
    return noticias;
  }
}
