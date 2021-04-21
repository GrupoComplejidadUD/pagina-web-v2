import { mision, vision } from "@Config/api.json";
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
  const misionEndPoint = mision.endpoint;
  const visionEndPoint = vision.endpoint;

  let misionContent = "";
  let visionContent = "";
  if (misionEndPoint === visionEndPoint) {
    const data = await getData(misionEndPoint);
    misionContent = data[mision.key];
    visionContent = data[vision.key];
  } else {
    const misionData = await getData(misionEndPoint);
    misionContent = misionData[mision.key];

    const visionData = await getData(visionEndPoint);
    visionContent = visionData[vision.key];
  }

  return {
    props: {
      mision: misionContent,
      vision: visionContent,
    },
  };
}
