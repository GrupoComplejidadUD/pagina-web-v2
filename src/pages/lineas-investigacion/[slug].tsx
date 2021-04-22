import { GetStaticProps } from "next";

import { lineasInvestigacion } from "@Config/api.json";
import { getApiData } from "@Lib/api";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";
import LineasDto from "@Dto/lineasDto";

type lineasProps = {
  name: string;
  content: string;
};

export default function Linea({ name, content }: lineasProps) {
  return (
    <Page title={name}>
      <h1>{name}</h1>
      <hr />
      <ApiContent content={content} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const data: LineasDto = await getApiData(`${lineasInvestigacion}/${slug}`);
  const { nombre, descripcion } = data;
  return {
    props: {
      name: nombre,
      content: descripcion,
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
