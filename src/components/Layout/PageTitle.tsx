import Head from "next/head";
import { title as AppTitle } from "@Config/info.json";

type TitleProps = {
  title: string;
};

export default function PageTitle({ title = "" }: TitleProps) {
  return (
    <Head>
      <title>
        {title !== "" && `${title} | `} {AppTitle}
      </title>
    </Head>
  );
}
