import cn from "classnames";
import { name } from "@Config/info.json";
import { home } from "@Config/navigation.json";

import Link from "next/link";
import { Container } from "react-bootstrap";

import styles from "./HomeCover.module.scss";

export default function HomeCover() {
  return (
    <section className={styles.cover}>
      <img
        className={styles.coverImg}
        src="images/fondo-cover-min.jpeg"
        alt="Cover Header"
      />
      <div className={styles.coverContent}>
        <Container>
          <div className={styles.coverHeader}>
            <h1 className={styles.coverHeaderTitle}>{name}</h1>
            <p className={styles.coverHeaderText}>
              Somos un Grupo de Investigación de la Universidad Distrital que
              nos interesamos por ahondar en el estudio de las Ciencias de la
              Complejidad.
            </p>
            <div className={styles.btnsHeader}>
              <Link href={home.primary}>
                <a className={cn("btn", styles.btnCta)}>Conócenos</a>
              </Link>
              <button className={cn("btn", styles.btnGhost)}>Explora</button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
