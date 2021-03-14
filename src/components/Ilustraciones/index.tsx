import cn from "classnames";

import ilustraciones from "./data.json";

import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

export default function Ilustraciones() {
  return (
    <section className={styles.ilustraciones}>
      <Container>
        {ilustraciones.map((il, indx) => (
          <Row key={indx} className={styles.ilustracionSection}>
            <Col
              xs={10}
              md={6}
              lg={5}
              className={cn("py-3", { "order-md-2": indx % 2 == 0 })}
            >
              <div className={styles.ilustracionInfo}>
                <h2>{il.title}</h2>
                <p>{il.content}</p>
                <Link href={il.path}>
                  <a className={cn("btn", styles.btnSec)}>Ver Más</a>
                </Link>
              </div>
            </Col>
            <Col xs={10} md={5} className="py-3">
              <img
                src={`images/ilustraciones/${il.ilustracion}`}
                alt={il.title}
              />
            </Col>
          </Row>
        ))}
      </Container>
      <img
        className={styles.ilustracionesFoot}
        src="images/ilustraciones/rectangle-curve.png"
        alt="rectangle-curve"
      />
    </section>
  );
}
