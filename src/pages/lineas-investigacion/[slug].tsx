import { GetStaticProps } from "next";

import { lineasInvestigacion } from "@Config/api.json";
import { getApiData } from "@Lib/api";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";
import LineasDto from "@Dto/lineasDto";

type lineasProps = {
  linea: LineasDto;
};

export default function Linea({ linea: { nombre, descripcion } }: lineasProps) {
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
  const data: LineasDto = await getApiData(`${lineasInvestigacion}/${slug}`);

  return {
    props: {
      linea: data,
    },
  };
};

export async function getStaticPaths() {
  const lineas: LineasDto[] = await getApiData(lineasInvestigacion);
  const paths = lineas.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
