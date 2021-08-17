import { GetStaticProps } from "next";
import { eventos, seminarios } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto from "@Dto/EventoDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type SeminariosProps = {
  seminario: EventoDto;
};

export default function Seminario({
  seminario: { nombre, descripcion },
}: SeminariosProps) {
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
      seminario: data,
    },
  };
};

export async function getStaticPaths() {
  const data: EventoDto[] = await getApiData(seminarios);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
