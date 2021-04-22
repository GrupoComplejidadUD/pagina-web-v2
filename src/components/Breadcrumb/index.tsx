import { useRouter } from "next/router";
import Link from "next/link";

function Breadcrumb() {
  const { asPath } = useRouter();
  const isCurrent = (path: string) => asPath === path;

  const pages = asPath.split("/").slice(1);
  const breadCrumbs = pages.map((page, indx) => {
    return {
      key: indx,
      label: page.charAt(0).toUpperCase() + page.slice(1),
      href: `/${pages.slice(0, indx + 1).join("/")}`,
    };
  });

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        {breadCrumbs.map(({ label, href, key }) => {
          if (isCurrent(href))
            return (
              <li className="breadcrumb-item active" key={key}>
                <span>{label}</span>
              </li>
            );
          else
            return (
              <li className="breadcrumb-item" key={key}>
                <Link href={href}>
                  <a href={href}>{label}</a>
                </Link>
              </li>
            );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
