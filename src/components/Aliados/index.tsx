import { aliados } from "@Config/info.json";

import styles from "./styles.module.scss";

export default function Aliados() {
  return (
    <section className={styles.sponsors}>
      <div className={styles.sponsorInfo}>
        {aliados.map((aliado) => (
          <a
            key={aliado.name}
            href={aliado.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`images/aliados/${aliado.img}`} alt={aliado.name} />
          </a>
        ))}
      </div>
    </section>
  );
}
