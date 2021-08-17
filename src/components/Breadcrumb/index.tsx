import { useRouter } from "next/router";
import Link from "next/link";

function Breadcrumb() {
  const { pathname, asPath } = useRouter();
  const isCurrent = (path: string) => asPath === path;
  const isNotFount = pathname === "/404";

  const pages = asPath.split("/").slice(1);
  const breadCrumbs = isNotFount
    ? [{ key: 404, label: "Page Not Found", href: asPath }]
    : pages.map((page, indx) => {
        const pageParsed = page.split("-").join(" ");
        return {
          key: indx,
          label: pageParsed.charAt(0).toUpperCase() + pageParsed.slice(1),
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
