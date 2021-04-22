import { publicaciones } from "@Config/api.json";
import { getApiData } from "@Lib/api";
import PublicacionDto, { toPublicacionDto } from "@Dto/PublicacionDto";

import Page from "@Components/Layout/Page";
import Link from "next/link";
import { useRouter } from "next/router";

type PublicacionesProps = {
  publicaciones: PublicacionDto[];
};

export default function Publicaciones({ publicaciones }: PublicacionesProps) {
  const { pathname } = useRouter();
  return (
    <Page title="Publicaciones">
      <h1>Publicaciones</h1>
      <hr />
      <ul>
        {publicaciones.map(({ titulo, slug }) => (
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
  const data: PublicacionDto[] = await getApiData(publicaciones);
  const publicacionesInv = data.map(toPublicacionDto);
  return {
    props: {
      publicaciones: publicacionesInv,
    },
  };
}
