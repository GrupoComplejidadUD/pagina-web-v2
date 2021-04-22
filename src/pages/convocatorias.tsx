import Page from "@Components/Layout/Page";

export default function Convocatorias() {
  return (
    <Page title="Convocatorias">
      <h1>Convocatorias</h1>
      <p>
        En el siguiente formulario podrás inscribirte en alguna de las tutorías
        que ofrecemos para que aprendas y vivas el maravilloso mundo de la
        Complejidad siendo parte de nuestro grupo:
      </p>
      <p className="text-center">
        <a
          target="_blank"
          rel="noopener"
          href="https://forms.gle/GgefGn63QKhoDnbp7"
        >
          https://forms.gle/GgefGn63QKhoDnbp7
        </a>
      </p>
      <p>Ten en cuenta lo siguiente a la hora de llenar el formulario:</p>
      <p className="text-center">
        <img
          src="/images/tutorias/modalidades-grupo-de-trabajo.png"
          alt="Modalidades Grupo de Trabajo"
        />
        <br />
        <img
          src="/images/tutorias/modalidades-grupo-de-investigacion.png"
          alt="Modalidades Grupo de Investigación"
        />
        <br />
        <img src="/images/tutorias/aprende.jpeg" alt="Aprende" />
      </p>
    </Page>
  );
}
