import styles from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const barsIcon = <FontAwesomeIcon icon={faBars} />;

export default function MobileMenu({ getToContact, getToAbout }) {
  return (
    <>
      <div className={styles.hamburgerBox}>
      <div className={styles.hamburger}>{barsIcon}</div>
      </div>
      <div className={styles.mobileMenu}>
        <h2>Home</h2>
        <h2 onClick={getToAbout}>About</h2>
        <h2>Blog</h2>
        <h2>GitHub</h2>
        <h2 onClick={getToContact}>Contact</h2>
      </div>
    </>
  );
}
