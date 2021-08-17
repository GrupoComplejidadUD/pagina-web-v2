import { proyectos } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import ProyectoDto from "@Dto/ProyectoDto";

import Page from "@Components/Layout/Page";
import Link from "next/link";
import { useRouter } from "next/router";

type ProyectosProps = {
  proyectos: Array<ProyectoDto>;
};

export default function Proyectos({ proyectos }: ProyectosProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Proyectos de Investigación">
      <h1>Proyectos de Investigación</h1>
      <hr />
      <ul>
        {proyectos.map(({ titulo, slug }) => (
          <li key={slug}>
            <h5>
              <Link href={`${pathname}/${slug}`}>
                <a href={`${pathname}/${slug}`}>{titulo}</a>
              </Link>
            </h5>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const data: ProyectoDto[] = await getApiData(proyectos);

  return {
    props: {
      proyectos: data,
    },
  };
}
