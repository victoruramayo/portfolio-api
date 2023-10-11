import { Controller, Get } from '@nestjs/common';
import { NoticiasService } from '../service/noticias.service';

@Controller('noticias_juventud')
export class NoticiasController {
  constructor(private readonly noticiaService: NoticiasService) {}
  @Get()
  list() {
    return this.noticiaService.getAll();
  }
}
