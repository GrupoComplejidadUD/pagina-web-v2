import { GetStaticProps } from "next";
import { congresos } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import CongresoDto from "@Dto/CongresoDto";

import Page from "@Components/Layout/Page";

type CongresoProps = {
  congreso: CongresoDto;
};

export default function Congreso({ congreso: { nombre } }: CongresoProps) {
  return (
    <Page title={nombre}>
      <h1>{nombre}</h1>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const data: CongresoDto = await getApiData(`${congresos}/${slug}`);

  return {
    props: {
      congreso: data,
    },
  };
};

export async function getStaticPaths() {
  const data: CongresoDto[] = await getApiData(congresos);
  const paths = data.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
