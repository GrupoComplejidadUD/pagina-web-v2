import Head from "next/head";
import { title, description, keywords } from "@Config/info.json";

import AppNavbar from "./Navbar/AppNavbar";
import AppFooter from "./Footer/AppFooter";
import Suscription from "./Suscription/Suscription";

import styles from "./AppLayout.module.scss";

export const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join()} />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.layout}>
        <AppNavbar />
        <main>{children}</main>
        <Suscription />
        <AppFooter />
      </div>
    </>
  );
};
