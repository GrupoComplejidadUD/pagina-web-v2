import AppTitle from "@Components/Layout/AppTitle";
import HomeCover from "@Components/Cover/HomeCover";
import Ilustraciones from "@Components/Ilustraciones";
import Aliados from "@Components/Aliados";

export default function Home() {
  return (
    <>
      <AppTitle>Home</AppTitle>
      <HomeCover />
      <Ilustraciones />
      <Aliados />
    </>
  );
}
