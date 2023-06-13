import Container from "../../architecture/Container/Container";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Container>
          <div className={styles.navbar}>
          <Link to="/">
            <div className={styles.logo}>
              <img
                src="https://i.postimg.cc/T33bVnpt/the-hicker-black.png"
                border="0"
                alt="the-hicker-black"
              />
            </div>
            </Link>
            <Menu />
            <MobileMenu />
          </div>
        </Container>
      </nav>
    </header>
  );
}
