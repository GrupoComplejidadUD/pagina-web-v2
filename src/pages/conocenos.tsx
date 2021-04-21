import { general } from "@Config/api.json";
import { getData } from "@Utils/api";

import Page from "@Components/Layout/Page";
import ApiContent from "@Components/Layout/ApiContent";

type AboutProps = {
  mision: string;
  vision: string;
};

export default function About({ mision, vision }: AboutProps) {
  return (
    <Page title="Conócenos">
      <h1>Conócenos</h1>
      <h2>Misión</h2>
      <ApiContent content={mision} />
      <h2>Visión</h2>
      <ApiContent content={vision} />
    </Page>
  );
}

export async function getStaticProps() {
  const { mision, vision } = await getData(general);
  return {
    props: {
      mision,
      vision,
    },
  };
}
