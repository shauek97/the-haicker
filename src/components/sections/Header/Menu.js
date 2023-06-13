import NavLinks from "./NavLinks";
import styles from "./Header.module.scss";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    <div className={styles.menu}>
      <NavLinks isMobile={false} closeMobileMenu={closeMobileMenu} />
    </div>
  );
}
