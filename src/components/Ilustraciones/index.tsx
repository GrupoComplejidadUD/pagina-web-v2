import cn from "classnames";

import ilustraciones from "./data.json";

import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

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
              <div className={cn({ "text-md-right": indx % 2 != 0 })}>
                <h2>{il.title}</h2>
                <p className="py-3">{il.content}</p>
                <Link href={il.path}>
                  <Button variant="secondary" as="a">
                    Ver Más
                  </Button>
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
