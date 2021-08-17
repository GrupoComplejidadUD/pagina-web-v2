import EventoDto from "./EventoDto";
import PublicidadDto from "./PublicidadDto";

export default interface CongresoDto {
  slug: string;
  nombre: string;
  descripcion?: string;
  fecha_inicio: string | Date;
  fecha_final: string | Date;
  publicidad: PublicidadDto;

  // Relations
  charlas: EventoDto[];
}
