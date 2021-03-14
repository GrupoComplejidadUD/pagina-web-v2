import { useRouter } from "next/router";
import cn from "classnames";

import { name as AppName } from "@Config/info.json";
import { navbar } from "@Config/navigation.json";
import { useScroll } from "@Hooks/useScroll";

import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import styles from "./AppNavbar.module.scss";

const navbarMenu = navbar as Menu;
export default function AppNavbar() {
  const isTop = useScroll();
  const { pathname } = useRouter();
  const isCurrent = (path: string) => pathname === path;

  return (
    <Navbar
      expand="lg"
      className={cn(styles.navbar, {
        [styles.coverNavbar]: isCurrent("/") && isTop,
        "fixed-top": isCurrent("/"),
        "sticky-top": !isCurrent("/"),
      })}
    >
      <Link href="/">
        <Navbar.Brand className={styles.navbarBrand} href="/">
          <img
            className={styles.brandLogo}
            src="/images/logo.png"
            alt={`${AppName} Logo`}
          />
          <span className={styles.brandText}>{AppName}</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        className={styles.toggler}
        aria-controls="navbarNavDropdown"
      />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className={cn("ml-auto", styles.nav)}>
          {navbarMenu.map((item) => {
            if (item.subMenu) {
              return (
                <NavDropdown
                  key={item.label}
                  title={item.label}
                  id={item.label}
                  className={cn(styles.navDropdown, {
                    [styles.navDropdownActive]: item.subMenu.some((si) =>
                      isCurrent(si.path!)
                    ),
                  })}
                >
                  {item.subMenu.map((subItem) => (
                    <Link key={subItem.label} href={subItem.path}>
                      <NavDropdown.Item
                        href={subItem.path}
                        active={isCurrent(subItem.path!)}
                        className={cn(styles.navLink, {
                          [styles.navLinkActive]: isCurrent(subItem.path!),
                        })}
                      >
                        {subItem.label}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>
              );
            } else {
              return (
                <Nav.Item key={item.label}>
                  <Link href={item.path!}>
                    <Nav.Link
                      href={item.path!}
                      active={isCurrent(item.path!)}
                      className={cn(styles.navLink, {
                        [styles.navLinkActive]: isCurrent(item.path!),
                      })}
                    >
                      {item.label}
                    </Nav.Link>
                  </Link>
                </Nav.Item>
              );
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
