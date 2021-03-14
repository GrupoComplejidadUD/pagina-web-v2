import type { AppProps } from "next/app";
import { AppLayout } from "@Components/Layout/AppLayout";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
