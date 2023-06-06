import styles from "./Header.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const barsIcon = <FontAwesomeIcon icon={faBars} />;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  console.log(open)
  return (
    <div className={styles.mobileSet}>
      <div className={styles.hamburgerBox}>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>{barsIcon}</div>
      </div>
    </div>
    
  );
}
