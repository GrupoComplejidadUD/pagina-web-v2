import { useRouter } from "next/router";
import Link from "next/link";

function Breadcrumb() {
  const { pathname } = useRouter();
  const isCurrent = (path: string) => pathname === path;

  const pages = pathname.split("/").slice(1);
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

/**
 * 
 * @param param0 mixin breadcrumb()
  - let breadCrumb = []
  - if(is_archive() || is_home2()) breadCrumb = page.base.split('/').slice(0, -1)
  - if(is_post() || is_page()) breadCrumb = page.path.split('/').slice(0, -1)

  nav
    ol.breadcrumb
      li.breadcrumb-item
        a(href=url_for('/'))= 'Inicio'

      - let currentPath = ''
      each localPath in breadCrumb
        - currentPath += localPath + '/'
        - pageTitle = localPath.charAt(0).toUpperCase() + localPath.slice(1);
        if is_current(currentPath, true)
          li.breadcrumb-item.active= pageTitle
        else
          li.breadcrumb-item
            a(href=url_for(currentPath))= pageTitle

 */
