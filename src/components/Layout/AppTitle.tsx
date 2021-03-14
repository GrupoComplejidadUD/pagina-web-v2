import Head from "next/head";
import { title } from "@Config/info.json";

type TitleProps = {
  children: string;
};

export default function AppTitle({ children = "" }: TitleProps) {
  return (
    <Head>
      <title>
        {children !== "" && `${children} | `} {title}
      </title>
    </Head>
  );
}
