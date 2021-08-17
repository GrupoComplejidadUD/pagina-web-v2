import ProyectoDto from "./ProyectoDto";

export default interface LineasDto {
  slug: string;
  nombre: string;
  descripcion: string;

  // Relations
  proyectos?: ProyectoDto[];
}
