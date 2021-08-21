import EventoDto from "./EventoDto";
import PublicidadDto from "./PublicidadDto";
import SeoDto from "./SeoDto";

export default interface CongresoDto {
  slug: string;
  nombre: string;
  descripcion?: string;
  fecha_inicio: string | Date;
  fecha_final: string | Date;

  // Pre - Congreso
  publicidad: PublicidadDto;

  // Seo Data
  seo: SeoDto;

  // Relations
  charlas: EventoDto[];
}
