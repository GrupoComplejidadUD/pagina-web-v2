export default interface PublicacionDto {
  titulo: string;
  slug: string;
  revista: string;
  identificador: string;
  url: string;
  repositorio: string;
  abstract: string;
  fechaPublicacion: string | Date;
}

interface PublicacionDtoServer extends PublicacionDto {
  nombre_revista: string;
  fecha_publicacion: string;
  url_publicacion: string;
  url_repositorio: string;
}

export function toPublicacionDto(
  data: Partial<PublicacionDtoServer>
): PublicacionDto {
  // Default Values
  const {
    titulo = "",
    slug = "",
    identificador = "",
    abstract = "",
    nombre_revista = "",
    fecha_publicacion = new Date().toISOString(),
    url_publicacion = "",
    url_repositorio = "",
  } = data;

  const revista = nombre_revista;
  const fechaPublicacion = fecha_publicacion;
  const repositorio = url_repositorio;
  const url = url_publicacion;

  return {
    titulo,
    slug,
    revista,
    identificador,
    url,
    repositorio,
    abstract,
    fechaPublicacion,
  };
}
