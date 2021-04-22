import { miembros } from "@Config/api.json";
import { getApiData } from "@Lib/api";

import Page from "@Components/Layout/Page";
import InvestigadorDto, { toInvestigadorDto } from "@Dto/investigadorDto";

type InvestigadoresProps = {
  profesores: InvestigadorDto[];
  estudiantes: InvestigadorDto[];
  egresados: InvestigadorDto[];
};

function toInvestigadorInfo(
  { nombre, apellido, contacto }: InvestigadorDto,
  indx: number
) {
  return (
    <li key={indx}>
      {nombre} {apellido}
      {" - "}
      {contacto ? <a href={`mailto:${contacto}`}>{contacto}</a> : ""}
    </li>
  );
}

export default function Investigadores({
  profesores,
  estudiantes,
  egresados,
}: InvestigadoresProps) {
  return (
    <Page title="Investigadores">
      <h1>Investigadores</h1>

      {profesores.length > 0 && (
        <>
          <hr />
          <h2>Profesores</h2>
          <ul>{profesores.map(toInvestigadorInfo)}</ul>
        </>
      )}

      {(estudiantes.length > 0 || egresados.length > 0) && (
        <>
          <hr />
          <h2>Estudiantes y Egresados</h2>
          <ul>
            {estudiantes.map(toInvestigadorInfo)}
            {egresados.map(toInvestigadorInfo)}
          </ul>
        </>
      )}
    </Page>
  );
}

export async function getStaticProps() {
  const data: InvestigadorDto[] = await getApiData(miembros);
  const investigadores = data.map(toInvestigadorDto);

  const isCat = (cat: string) => ({ categoria }: InvestigadorDto) =>
    categoria === cat;

  const profesores = investigadores.filter(isCat("Profesor"));
  const estudiantes = investigadores.filter(isCat("Estudiante"));
  const egresados = investigadores.filter(isCat("Egresado"));

  return {
    props: {
      profesores,
      estudiantes,
      egresados,
    },
  };
}
