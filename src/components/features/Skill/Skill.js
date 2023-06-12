import styles from "./Skill.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Skill(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function randomDelay() {
    const random = Math.random();
    const delay = random * 2.5;
    return delay;
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: randomDelay() }}
        className={styles.technologieBox}
      >
        <div className={styles.skillIcon}>
          <div
            className={
              props.level === "learned" ? styles.iconThird : styles.iconFirst
            }
          ></div>
        </div>
        <div className={styles.skillText}>
          <p>{props.title}</p>
        </div>
      </motion.div>
    </div>
  );
}
