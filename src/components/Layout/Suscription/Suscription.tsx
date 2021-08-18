import { useRef, useState, FormEvent, ChangeEvent } from "react";
import cn from "classnames";

import { Button, Container, Form } from "react-bootstrap";

import styles from "./Suscription.module.scss";

const emailTest = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/i;
export default function Suscription() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChangeEmail = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
    setIsValid(emailTest.test(value));
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!isValid) return;
    (ev.target as HTMLFormElement).submit();

    setEmail("");
    setIsValid(false);
  };

  return (
    <Container fluid className={cn("py-4 bg-dark", styles.suscription)}>
      <h4 className={styles.suscriptionTitle}>Suscríbete a Nuestro Boletín</h4>
      <Form
        method="POST"
        action="https://app.mdirector.com/form-subscribe"
        target="_blank"
        className={styles.suscriptionFrom}
        onSubmit={handleSubmit}
      >
        <input name="empId" value="31102" readOnly hidden />
        <input name="formId" value="3" readOnly hidden />
        <input name="lang" value="es" readOnly hidden />
        <input type="checkbox" name="privacy" checked readOnly hidden />
        <Form.Control
          value={email}
          onChange={handleChangeEmail}
          className={styles.suscriptionInput}
          type="email"
          name="EMAIL"
          placeholder="Ingresa tu correo"
          maxLength={250}
          minLength={7}
          required
        />
        <Button
          variant="secondary"
          className={styles.suscriptionButton}
          type="submit"
          disabled={!isValid}
        >
          Enviar
        </Button>
      </Form>
      <p className={styles.suscriptionLegend}>
        <small>
          Te estás suscribiendo para recibir nuestros boletines y novedades
          sobre productos. Al hacerlo estás aceptando nuestra{" "}
          <a className="text-secondary" href="#">
            política de privacidad
          </a>
          , pero puedes darte de baja en cualquier momento.
        </small>
      </p>
    </Container>
  );
}
