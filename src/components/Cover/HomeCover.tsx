import { useRouter } from "next/router";
import cn from "classnames";
import { name } from "@Config/info.json";
import { home } from "@Config/navigation.json";

import Link from "next/link";
import { Container } from "react-bootstrap";

import styles from "./HomeCover.module.scss";

type CoverProps = {
  randomRoutes?: string[];
};

export default function HomeCover({ randomRoutes = [] }: CoverProps) {
  const router = useRouter();

  const handleRandom = () => {
    if (randomRoutes.length > 0) {
      const randomIndex = Math.floor(Math.random() * randomRoutes.length);
      const newRoute = randomRoutes[randomIndex];
      router.push(newRoute);
    }
  };

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
            <h1>
              <strong>{name.toUpperCase()}</strong>
            </h1>
            <p className="my-4">
              Somos un Grupo de Investigación de la Universidad Distrital que
              nos interesamos por ahondar en el estudio de las Ciencias de la
              Complejidad.
            </p>
            <div className={styles.btnsHeader}>
              <Link href={home.primary}>
                <a className={cn("btn", styles.btnCta)}>Conócenos</a>
              </Link>
              <button
                className={cn("btn", styles.btnGhost)}
                onClick={handleRandom}
              >
                Explora
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
