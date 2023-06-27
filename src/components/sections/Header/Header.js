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
            <img src='https://i.postimg.cc/wBK65cC2/the-haicker-black-smaller.png' border='0' alt='the-haicker-black-smaller'/>
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
