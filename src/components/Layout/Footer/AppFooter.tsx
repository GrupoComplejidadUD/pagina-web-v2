import cn from "classnames";

import { social } from "@Config/info.json";
import { footer } from "@Config/navigation.json";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import styles from "./AppFooter.module.scss";

const footerMenu = footer as Menu;
export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <Container fluid="md">
        <Row className="text-center">
          {footerMenu.map((item) => (
            <Col sm className="text-lg-left pt-4" key={item.label}>
              <span>
                <b>{item.label.toUpperCase()}</b>
              </span>
              <ul className={cn("list-unstyled", styles.footerList)}>
                {item.subMenu!.map((subItem) => (
                  <li key={subItem.label}>
                    <a href={subItem.path}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Col md={12} lg={5} className="text-lg-right pt-4">
            <div className={styles.footerIcons}>
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              )}
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              )}
              {social.email && (
                <a href={`mailto:${social.email}`}>
                  <FaEnvelope />
                </a>
              )}
            </div>
            <div className={styles.footerLogos}>
              <Link href="/">
                <a>
                  <img src="/images/complexud-logo.png" alt="Logo Complexud" />
                </a>
              </Link>
              <a
                href="https://www.udistrital.edu.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/udistrital_esc.png" alt="Logo Complexud" />
              </a>
            </div>
            <div className={styles.footerCopyright}>
              <small>
                copyright © {new Date().getFullYear()}{" "}
                <Link href="/">
                  <a>ComplexUD</a>
                </Link>
              </small>
              {/* <br />
              <small>
                The feed is available via&nbsp;<a href="/atom.xml">atom</a>
              </small> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
