import { GetStaticProps } from "next";
import { eventos, conferencias } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto from "@Dto/EventoDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type ConferenciaProps = {
  conferencia: EventoDto;
};

export default function Conferencia({
  conferencia: { nombre, descripcion },
}: ConferenciaProps) {
  return (
    <Page title={nombre}>
      <h1>{nombre}</h1>
      <hr />
      <ApiContent content={descripcion} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const data: EventoDto = await getApiData(`${eventos}/${slug}`);

  return {
    props: {
      conferencia: data,
    },
  };
};

export async function getStaticPaths() {
  const data: EventoDto[] = await getApiData(conferencias);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
