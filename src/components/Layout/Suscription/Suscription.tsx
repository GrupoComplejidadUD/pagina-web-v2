import cn from "classnames";

import { Button, Container, Form } from "react-bootstrap";

import styles from "./Suscription.module.scss";

export default function Suscription() {
  return (
    <Container fluid className={cn("py-5", styles.suscription)}>
      <h4 className="suscription-title">Suscríbete a Nuestro Boletín</h4>
      <Form
        className={styles.suscriptionFrom}
        onSubmit={(ev) => ev.preventDefault()}
        inline
      >
        <Form.Control
          className={styles.suscriptionInput}
          id="email"
          type="email"
          name="EMAIL"
          placeholder="Ingresa tu correo"
          maxLength={250}
          minLength={7}
          required
        />
        <Button className={styles.suscriptionButton} type="submit" disabled>
          Enviar
        </Button>
      </Form>
      <p className={styles.suscriptionLegend}>
        <small>
          Te estás suscribiendo para recibir nuestros boletines y novedades
          sobre productos. Al hacerlo estás aceptando nuestra{" "}
          <a href="#">política de privacidad</a>, pero puedes darte de baja en
          cualquier momento.
        </small>
      </p>
    </Container>
  );
}
