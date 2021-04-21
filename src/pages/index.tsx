import PageTitle from "@Components/Layout/PageTitle";
import HomeCover from "@Components/Cover/HomeCover";
import Ilustraciones from "@Components/Ilustraciones";
import Aliados from "@Components/Aliados";

export default function Inicio() {
  return (
    <>
      <PageTitle title="Inicio" />
      <HomeCover />
      <Ilustraciones />
      <Aliados />
    </>
  );
}
