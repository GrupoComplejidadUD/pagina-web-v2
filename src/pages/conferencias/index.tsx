import { conferencias } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto from "@Dto/EventoDto";

import Link from "next/link";
import { useRouter } from "next/router";

import Page from "@Components/Layout/Page";

type ConferenciasProps = {
  conferencias: EventoDto[];
};

export default function Conferencias({ conferencias }: ConferenciasProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Conferencias">
      <h1>Conferencias</h1>
      <hr />
      <ul>
        {conferencias.map(({ slug, nombre }) => (
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
  const data: EventoDto[] = await getApiData(conferencias);

  return {
    props: {
      conferencias: data,
    },
  };
}
