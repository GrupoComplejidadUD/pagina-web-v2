import { miembros } from "@Config/api.json";
import { getApiData } from "@Lib/api";

import Page from "@Components/Layout/Page";
import InvestigadorDto from "@Dto/investigadorDto";
import { Col, Row } from "react-bootstrap";

type InvestigadoresProps = {
  profesores: InvestigadorDto[];
  estudiantes: InvestigadorDto[];
  egresados: InvestigadorDto[];
};

function toInvestigadorInfo(
  { nombre, apellido }: InvestigadorDto,
  indx: number
) {
  return (
    <li key={indx}>
      {nombre} {apellido}
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
          <Row>
            <Col md="8" lg="6">
              <h2>Profesores</h2>
              <ul>{profesores.map(toInvestigadorInfo)}</ul>
            </Col>
            <Col md="4" lg="6" className="text-center">
              <img
                className="w-100"
                src="/images/miembros/miembros-complexud.jpg"
                alt="ComplexUD"
              />
            </Col>
          </Row>
        </>
      )}

      {(estudiantes.length > 0 || egresados.length > 0) && (
        <>
          <hr />
          <Row>
            <Col md="8" lg="6">
              <h2>Estudiantes y Egresados</h2>
              <ul>
                {estudiantes.map(toInvestigadorInfo)}
                {egresados.map(toInvestigadorInfo)}
              </ul>
            </Col>
            <Col md="4" lg="6" className="text-center">
              <img
                className="w-100"
                src="/images/miembros/cafe-complejo.png"
                alt="ComplexUD"
              />
            </Col>
          </Row>
        </>
      )}
    </Page>
  );
}

export async function getStaticProps() {
  const investigadores: InvestigadorDto[] = await getApiData(miembros);

  const isCat =
    (cat: string) =>
    ({ categoria }: InvestigadorDto) =>
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
