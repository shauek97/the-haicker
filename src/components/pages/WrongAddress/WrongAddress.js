import Container from "../../architecture/Container/Container";
import styles from "./WrongAddress.module.scss";
import { motion } from "framer-motion";

export default function WrongAddress() {
  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };

  return (
    
      <section className={styles.titleBox}>
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          className={styles.title}
        >
          <h1>
            404<br></br> PAGE NOT FOUND
          </h1>
        </motion.div>
      </section>
  );
}
