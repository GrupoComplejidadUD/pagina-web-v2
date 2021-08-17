import ProyectoDto from "./ProyectoDto";
import InvestigadorDto from "./investigadorDto";

export default interface PublicacionDto {
  slug: string;
  titulo: string;
  revista: string;
  fecha_publicacion: string | Date;
  identificador: string;
  abstract: string;
  url_publicacion: string;
  url_repositorio?: string;

  // Relations
  proyecto?: ProyectoDto;
  autores?: InvestigadorDto[];
}
