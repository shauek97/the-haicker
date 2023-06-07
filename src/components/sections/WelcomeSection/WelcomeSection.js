import styles from "./WelcomeSection.module.scss";
import Container from "../../architecture/Container/Container";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function App() {
  const handleClickScroll = () => {
    const element = document.getElementById("introduction");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className={styles.backgroundImage}>
        <Container>
          <div className={styles.title}>
            <h1>
              WHEN MOUNTAINS<br></br> MEETS PROGRAMMING
            </h1>
          </div>
          <div className={styles.btn} onClick={handleClickScroll}>
            About
          </div>
        </Container>
      </div>
    </section>
  );
}
