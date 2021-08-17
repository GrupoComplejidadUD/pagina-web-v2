import CongresoDto from "./Congresos";
import InvestigadorDto from "./investigadorDto";
import MediaDto from "./MediaDto";
import ProyectoDto from "./ProyectoDto";
import PublicidadDto from "./PublicidadDto";

export default interface EventoDto {
  slug: string;
  nombre: string;
  descripcion: string;
  fecha: string | Date;
  tipo: "Seminario" | "Conferencia" | "Charla" | "Sustentacion" | "Otro";
  ubicacion: string;

  // Pre - Evento
  publicidad?: PublicidadDto;

  // Post - Evento
  grabacion?: any;
  fotos?: MediaDto[];

  // Relations
  ponentes?: InvestigadorDto[];
  proyecto?: ProyectoDto;
  congreso?: CongresoDto;
}
