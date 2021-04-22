export default interface ProyectoDto {
  titulo: string;
  slug: string;
  descripcion: string;
  tipo:
    | "Investigación"
    | "Tesis Pregrado"
    | "Tesis Maestria"
    | "Tesis Doctoral";
  estado: "Iniciado" | "Finalizado" | "Pausado" | "Cancelado";
  fechaInicio: string | Date;
  fechaFinal?: string | Date;
}

interface ProyectoDtoServer extends ProyectoDto {
  fecha_inicio: string;
  fecha_final?: string;
}

export function toProyectoDto(data: Partial<ProyectoDtoServer>): ProyectoDto {
  // Default Values
  const {
    titulo = "",
    slug = "",
    descripcion = "",
    tipo = "Investigación",
    estado = "Iniciado",
    fecha_inicio = new Date().toISOString(),
    fecha_final,
  } = data;

  const fechaInicio = fecha_inicio;
  const fechaFinal = fecha_final;
  return { titulo, slug, descripcion, tipo, estado, fechaInicio, fechaFinal };
}
