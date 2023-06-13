import styles from "./Project.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function Project(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateFrom = { opacity: 0, y: -50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div ref={ref}>
      <Link className={styles.link} to={props.url}>
      <motion.div
        initial={animateFrom}
        animate={isInView ? animateTo : animateFrom}
        transition={{ delay: 0.05 }}
        className={styles.projectBox}
      >
        <div className={styles.projectTitle}>
          <h5>{props.title}</h5>
        </div>
        <div className={styles.projectDescription}>
          <p>{props.description}</p>
        </div>
      </motion.div>
      </Link>
    </div>
  );
}
