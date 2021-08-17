import { seminarios } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import EventoDto from "@Dto/EventoDto";

import Link from "next/link";
import { useRouter } from "next/router";

import Page from "@Components/Layout/Page";

type SeminariosProps = {
  seminarios: EventoDto[];
};

export default function Seminarios({ seminarios }: SeminariosProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Seminarios">
      <h1>Seminarios</h1>
      <hr />
      <ul>
        {seminarios.map(({ slug, nombre }) => (
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
  const data: EventoDto[] = await getApiData(seminarios);

  return {
    props: {
      seminarios: data,
    },
  };
}
