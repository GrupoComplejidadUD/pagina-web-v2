import MediaDto, { toMediaDto } from "./MediaDto";

export default interface EventoDto {
  titulo: string;
  descripcion: string;
  slug: string;
  fecha: string | Date;
  ubicacion: string;
  publicidad?: {
    mensaje?: string;
    poster?: MediaDto;
  };
}

interface EventoServidorDto extends EventoDto {
  info: {
    fecha: string;
    ubicacion: string;
    grabacion: MediaDto;
  };
}

export function toEventoDto(data: Partial<EventoServidorDto>): EventoDto {
  const { titulo = "", descripcion = "", slug = "", publicidad, info } = data;
  const { mensaje = "", poster } = publicidad!;
  const { fecha = "", ubicacion = "" } = info!;

  const posterParsed = poster ? toMediaDto(poster) : poster;
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
