import MediaDto from "./MediaDto";
import ProyectoDto from "./ProyectoDto";
import PublicacionDto from "./PublicacionDto";
import EventoDto from "./EventoDto";

export default interface InvestigadorDto {
  slug: string;
  nombre: string;
  apellido: string;
  categoria: "Profesor" | "Estudiante" | "Egresado" | "Externo";
  vinculacion: "Miembro" | "Colaborador";
  activo: boolean;

  perfil_publico?: {
    descripcion?: string;
    correo?: string;
    foto?: MediaDto;
  };

  // Relations
  proyectos_dirigidos?: ProyectoDto[];
  proyectos?: ProyectoDto[];
  publicaciones?: PublicacionDto[];
  ponencias?: EventoDto[];
}
