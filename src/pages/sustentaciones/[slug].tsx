import { GetStaticProps } from "next";
import { eventos, sustentaciones } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto from "@Dto/EventoDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type SustentacionProps = {
  sustentacion: EventoDto;
};

export default function Sustentacion({
  sustentacion: { nombre, descripcion },
}: SustentacionProps) {
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
      sustentacion: data,
    },
  };
};

export async function getStaticPaths() {
  const data: EventoDto[] = await getApiData(sustentaciones);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
