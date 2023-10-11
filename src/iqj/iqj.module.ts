import { Module } from '@nestjs/common';
import { NoticiasController } from './controller/noticias.controller';
import { EventosController } from './controller/eventos.controller';
import { ConvocatoriasController } from './controller/convocatorias.controller';
import { EventosService } from './service/eventos.service';
import { NoticiasService } from './service/noticias.service';
import { ConvocatoriasService } from './service/convocatorias.service';

@Module({
  controllers: [NoticiasController, EventosController, ConvocatoriasController],
  providers: [EventosService, NoticiasService, ConvocatoriasService],
})
export class IqjModule {}
