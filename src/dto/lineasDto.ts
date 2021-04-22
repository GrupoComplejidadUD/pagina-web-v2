export default interface LineasDto {
  nombre: string;
  slug: string;
  descripcion: string;
}

export function toLineasDto(data: Partial<LineasDto>): LineasDto {
  const { nombre = "", slug = "", descripcion = "" } = data;
  return { nombre, slug, descripcion };
}
