export default interface InvestigadorDto {
  nombre: string;
  apellido: string;
  contacto: string;
  categoria: "Profesor" | "Estudiante" | "Egresado" | "Externo";
  vinculacion: "Miembro" | "Colaborador";
}

export function toInvestigadorDto(
  data: Partial<InvestigadorDto>
): InvestigadorDto {
  // Default Values
  const {
    nombre = "",
    apellido = "",
    contacto = "",
    categoria = "Estudiante",
    vinculacion = "Miembro",
  } = data;
  return { nombre, apellido, contacto, categoria, vinculacion };
}
