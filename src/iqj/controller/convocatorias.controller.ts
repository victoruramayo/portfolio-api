import { Controller, Get } from '@nestjs/common';
import { ConvocatoriasService } from '../service/convocatorias.service';

@Controller('convocatorias_juventud')
export class ConvocatoriasController {
  constructor(private readonly conService: ConvocatoriasService) {}

  @Get()
  list() {
    return this.conService.getAll();
  }
}
