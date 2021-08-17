import { general } from "@Config/api.json";
import { getApiData } from "@Lib/api";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type ObjetivosProps = {
  objetivos: string;
};

export default function Objetivos({ objetivos }: ObjetivosProps) {
  return (
    <Page title="Objetivos">
      <h1>Objetivos</h1>
      <ApiContent content={objetivos} />
    </Page>
  );
}

export async function getStaticProps() {
  const { objetivos } = await getApiData(general);
  return {
    props: {
      objetivos,
    },
  };
}
