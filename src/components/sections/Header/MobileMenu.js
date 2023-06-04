import styles from "./Header.module.scss";

export default function MobileMenu({ getToContact, getToAbout }) {
  return (
    <div className={styles.mobileMenu}>
      <h2>Home</h2>
      <h2 onClick={getToAbout}>About</h2>
      <h2>Blog</h2>
      <h2>GitHub</h2>
      <h2 onClick={getToContact}>Contact</h2>
    </div>
  );
}
