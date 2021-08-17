import { general } from "@Config/api.json";
import { getApiData } from "@Lib/api";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type HistoriaProps = {
  historia: string;
  logros: string;
};

export default function Historia({ historia, logros }: HistoriaProps) {
  return (
    <Page title="Historia, Logros y Fortalezas">
      <h1>Historia, Logros y Fortalezas</h1>
      <ApiContent content={historia} />
      <ApiContent content={logros} />
    </Page>
  );
}

export async function getStaticProps() {
  const { historia, logros } = await getApiData(general);
  return {
    props: {
      historia,
      logros,
    },
  };
}
