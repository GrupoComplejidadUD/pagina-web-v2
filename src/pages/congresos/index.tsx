import { congresos } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import CongresoDto from "@Dto/CongresoDto";

import Link from "next/link";
import { useRouter } from "next/router";

import Page from "@Components/Layout/Page";

type CongresosProps = {
  congresos: CongresoDto[];
};

export default function Congresos({ congresos }: CongresosProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Congresos">
      <h1>Congresos</h1>
      <hr />
      <ul>
        {congresos.map(({ slug, nombre }) => (
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
  const data: CongresoDto[] = await getApiData(congresos);

  return {
    props: {
      congresos: data,
    },
  };
}
