import styles from "./Blog.module.scss";
import Header from "../../sections/Header/Header";
import { motion } from "framer-motion";

export default function Blog() {
  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };

  return (
    <>
      <Header />
      <section className={styles.blog}>
        <div className={styles.titleBox}>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            className={styles.title}
          >
            <h1>
              BLOG IN PROCESS<br></br>PLEASE STAND BY
            </h1>
          </motion.div>
        </div>
      </section>
    </>
  );
}
