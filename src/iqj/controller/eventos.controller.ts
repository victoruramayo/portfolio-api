import { Controller, Get } from '@nestjs/common';
import { EventosService } from '../service/eventos.service';

@Controller('eventos_juventud')
export class EventosController {
  constructor(private readonly evSer: EventosService) {}
  @Get()
  list() {
    return this.evSer.getAll();
  }
}
