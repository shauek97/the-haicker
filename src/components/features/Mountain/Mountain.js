import styles from "./Mountain.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const mountainIcon = <FontAwesomeIcon icon={faMountain} />;

export default function Mountain(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function randomDelay() {
    const random = Math.random();
    const delay = random * 2;
    return delay;
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: randomDelay() }}
        className={styles.mountain}
      >
        <div className={styles.icon}>{mountainIcon}</div>
        <div className={styles.mountainTitle}>
          <p>
            {props.name} {props.height}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
