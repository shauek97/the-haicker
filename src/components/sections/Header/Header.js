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
                src="../../../../public/media/the-haicker-black.png"
                border="0"
                alt="the-haicker-black"
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
