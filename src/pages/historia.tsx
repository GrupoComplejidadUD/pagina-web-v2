import { historia, logros } from "@Config/api.json";
import { getData } from "@Utils/api";

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
  const historiaEndpoint = historia.endpoint;
  const logrosEndpoint = logros.endpoint;

  let historiaContent = "";
  let logrosContent = "";
  if (historiaEndpoint === logrosEndpoint) {
    const data = await getData(historiaEndpoint);
    historiaContent = data[historia.key];
    logrosContent = data[logros.key];
  } else {
    const historiaData = await getData(historiaEndpoint);
    historiaContent = historiaData[historia.key];

    const logrosData = await getData(logrosEndpoint);
    logrosContent = logrosData[logros.key];
  }

  return {
    props: {
      historia: historiaContent,
      logros: logrosContent,
    },
  };
}
