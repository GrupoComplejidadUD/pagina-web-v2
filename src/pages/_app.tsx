import type { AppProps } from "next/app";
import { AppLayout } from "@Components/Layout/AppLayout";

import "../styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
