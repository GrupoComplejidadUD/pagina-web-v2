import { sustentaciones } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto from "@Dto/EventoDto";

import Link from "next/link";
import { useRouter } from "next/router";

import Page from "@Components/Layout/Page";

type SustentacionesProps = {
  sustentaciones: EventoDto[];
};

export default function Sustentaciones({
  sustentaciones,
}: SustentacionesProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Sustentaciones">
      <h1>Sustentaciones</h1>
      <hr />
      <ul>
        {sustentaciones.map(({ slug, nombre }) => (
          <li key={slug}>
            <h5>
              <Link href={`${pathname}/${slug}`}>
                <a href={`${pathname}/${slug}`}>{nombre}</a>
              </Link>
            </h5>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const data: any[] = await getApiData(sustentaciones);

  return {
    props: {
      sustentaciones: data,
    },
  };
}
