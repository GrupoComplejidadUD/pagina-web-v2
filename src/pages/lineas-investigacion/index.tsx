import { lineasInvestigacion } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import LineasDto from "@Dto/lineasDto";

import Page from "@Components/Layout/Page";
import Link from "next/link";
import { useRouter } from "next/router";

type LineasProps = {
  lineas: Array<LineasDto>;
};

export default function Lineas({ lineas }: LineasProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Lineas de Investigación">
      <h1>Lineas de Investigación</h1>
      <hr />
      <ul>
        {lineas.map(({ nombre, slug }) => (
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
  const data: Array<LineasDto> = await getApiData(lineasInvestigacion);

  return {
    props: {
      lineas: data,
    },
  };
}
