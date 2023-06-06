import NavLinks from "./NavLinks";
import styles from "./Header.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <NavLinks/>
    </div>
  );
}
