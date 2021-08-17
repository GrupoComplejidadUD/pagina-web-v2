import ProyectoDto from "./ProyectoDto";
import SeoDto from "./SeoDto";

export default interface LineasDto {
  slug: string;
  nombre: string;
  descripcion: string;

  // Seo Data
  seo: SeoDto;

  // Relations
  proyectos?: ProyectoDto[];
}
