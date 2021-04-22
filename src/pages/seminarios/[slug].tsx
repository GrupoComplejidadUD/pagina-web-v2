import { GetStaticProps } from "next";
import { seminarios } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto, { toEventoDto } from "@Dto/EventoDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type SeminariosProps = {
  seminario: EventoDto;
};

export default function Seminario({
  seminario: { titulo, descripcion },
}: SeminariosProps) {
  return (
    <Page title={titulo}>
      <h1>{titulo}</h1>
      <hr />
      <ApiContent content={descripcion} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const data: EventoDto = (await getApiData(`${seminarios}&slug=${slug}`))[0];
  const seminario = toEventoDto(data);

  return {
    props: {
      seminario,
    },
  };
};

export async function getStaticPaths() {
  const data: EventoDto[] = await getApiData(`${seminarios}`);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
