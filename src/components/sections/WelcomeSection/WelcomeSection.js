import styles from "./WelcomeSection.module.scss";
import Container from "../../architecture/Container/Container";
import { delay, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const handleClickScroll = () => {
    const element = document.getElementById("introduction");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };

  return (
    <section>
      <div className={styles.backgroundImage}>
        <Container>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            className={styles.title}
          >
            <h1>
              WHEN MOUNTAINS<br></br> MEETS PROGRAMMING
            </h1>
          </motion.div>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            className={styles.btn}
            onClick={handleClickScroll}
          >
            About
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
