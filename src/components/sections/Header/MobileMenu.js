import styles from "./Header.module.scss";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const barsIcon = <FontAwesomeIcon icon={faBars} />;

export default function MobileMenu() {
  
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <div className={styles.mobileSetting}>
        <div className={styles.mobileMenu}>
          {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu()}/>}
        </div>
        <div className={styles.hamburgerBox}>
          <div className={styles.hamburger} onClick={() => setOpen(!open)}>
            {barsIcon}
          </div>
        </div>
      </div>
    </>
  );
}
