import { FC } from "react";
import PageTitle from "./PageTitle";

import { Container } from "react-bootstrap";
import Breadcrumb from "@Components/Breadcrumb";

type PageProps = {
  title?: string;
};

const Page: FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Breadcrumb />
      <Container className="py-3">
        {title && <PageTitle title={title} />}
        {children}
      </Container>
    </>
  );
};

export default Page;
