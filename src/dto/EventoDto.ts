import MediaDto, { toMediaDto } from "./MediaDto";

export default interface EventoDto {
  titulo: string;
  descripcion: string;
  slug: string;
  fecha: string | Date;
  ubicacion: string;
  publicidad?: {
    mensaje?: string;
    poster?: MediaDto | null;
  };
}

interface EventoServidorDto extends EventoDto {
  info: {
    fecha: string;
    ubicacion: string;
    grabacion: MediaDto | null;
  };
}

export function toEventoDto(data: Partial<EventoServidorDto>): EventoDto {
  const { titulo = "", descripcion = "", slug = "", publicidad, info } = data;
  let mensaje = "";
  let posterParsed = null;
  if (publicidad) {
    mensaje = publicidad.mensaje || "";
    const { poster } = publicidad;
    posterParsed = poster ? toMediaDto(poster) : poster;
  }

  let fecha = "";
  let ubicacion = "";
  if (info) {
    fecha = info.fecha || "";
    ubicacion = info.ubicacion || "";
  }

  return {
    titulo,
    descripcion,
    slug,
    fecha,
    ubicacion,
    publicidad: {
      mensaje,
      poster: posterParsed,
    },
  };
}
