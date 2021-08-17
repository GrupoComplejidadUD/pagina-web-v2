import LineasDto from "./lineasDto";
import InvestigadorDto from "./investigadorDto";
import PublicacionDto from "./PublicacionDto";
import SeoDto from "./SeoDto";

export default interface ProyectoDto {
  slug: string;
  titulo: string;
  descripcion: string;
  tipo:
    | "Investigación"
    | "Tesis_Pregrado"
    | "Tesis_Maestria"
    | "Tesis_Doctoral";
  estado: "Iniciado" | "Finalizado" | "Pausado" | "Cancelado";
  fecha_inicio: string | Date;
  fecha_final?: string | Date;

  // Seo Data
  seo: SeoDto;

  // Relations
  lineas_de_investigacion?: LineasDto[];
  directores?: InvestigadorDto[];
  integrantes?: InvestigadorDto[];
  publicaciones?: PublicacionDto[];
}
