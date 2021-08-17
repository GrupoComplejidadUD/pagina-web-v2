import { GetStaticProps } from "next";

import { proyectos } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import ProyectoDto from "@Dto/ProyectoDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type proyectosProps = {
  proyecto: ProyectoDto;
};

export default function Proyecto({
  proyecto: { titulo, descripcion },
}: proyectosProps) {
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
  const data: ProyectoDto = await getApiData(`${proyectos}/${slug}`);

  return {
    props: {
      proyecto: data,
    },
  };
};

export async function getStaticPaths() {
  const data: ProyectoDto[] = await getApiData(`${proyectos}`);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
