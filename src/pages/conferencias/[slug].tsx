import { GetStaticProps } from "next";
import { conferencias } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto, { toEventoDto } from "@Dto/EventoDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type ConferenciaProps = {
  conferencia: EventoDto;
};

export default function Conferencia({
  conferencia: { titulo, descripcion },
}: ConferenciaProps) {
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
  const data: EventoDto = (await getApiData(`${conferencias}&slug=${slug}`))[0];
  const conferenciaData = toEventoDto(data);

  return {
    props: {
      conferencia: conferenciaData,
    },
  };
};

export async function getStaticPaths() {
  const data: EventoDto[] = await getApiData(`${conferencias}`);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
