import { GetStaticProps } from "next";

import { publicaciones } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import PublicacionDto, { toPublicacionDto } from "@Dto/PublicacionDto";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type publicacionesProps = {
  publicacion: PublicacionDto;
};

export default function Publicacion({
  publicacion: { titulo, abstract },
}: publicacionesProps) {
  return (
    <Page title={titulo}>
      <h1>{titulo}</h1>
      <hr />
      <ApiContent content={abstract} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const data: PublicacionDto = (
    await getApiData(`${publicaciones}?slug=${slug}`)
  )[0];
  const publicacion = toPublicacionDto(data);
  return {
    props: {
      publicacion,
    },
  };
};

export async function getStaticPaths() {
  const data: PublicacionDto[] = await getApiData(`${publicaciones}`);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
