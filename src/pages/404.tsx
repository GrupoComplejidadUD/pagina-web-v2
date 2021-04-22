import Page from "@Components/Layout/Page";

export default function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h1>No Hemos Podido Encontrar Esta Página</h1>
        <div className="image-style-align-center">
          <img src="/images/404.svg" alt="Error 404" />
        </div>
      </div>
    </Page>
  );
}
