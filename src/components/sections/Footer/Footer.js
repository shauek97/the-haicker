import styles from "./Footer.module.scss";
import Container from "../../architecture/Container/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.copyright}>
          <h5>Copyright © Wojciech Szałkiewicz 2023. All rights reserved.</h5>
        </div>
      </Container>
    </footer>
  );
}
