import styles from "./Contact.module.scss";
import Container from "../../architecture/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateFrom = { opacity: 0, y: -50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.contactTitle}>
          <h4>
            CONTACT <span>me</span>
          </h4>
        </div>

        <div className={styles.contacts}>
          <div className={styles.contact}>
            <div className={styles.icon}>{phoneIcon}</div>
            <div className={styles.text}>
              <p>
                <span>Phone:</span> +48 664845934
              </p>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.icon}>{envelopeIcon}</div>
            <div className={styles.text}>
              <p>
                <span>Email:</span> wojciechszalk97@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <form
            action="https://formsubmit.co/e74bb1e61458f78724df9c5d8eee68fb"
            method="POST"
          >
            <div ref={ref}>
              <motion.input
                initial={animateFrom}
                animate={isInView ? animateTo : animateFrom}
                transition={{ delay: 0.05 }}
                type="text"
                name="name"
                placeholder="Name"
                required
              ></motion.input>

              <motion.input
                initial={animateFrom}
                animate={isInView ? animateTo : animateFrom}
                transition={{ delay: 0.1 }}
                type="email"
                name="email"
                placeholder="Email"
                required
              ></motion.input>
              <motion.textarea
                initial={animateFrom}
                animate={isInView ? animateTo : animateFrom}
                transition={{ delay: 0.15 }}
                name="content"
                placeholder="What's up?"
                required
              ></motion.textarea>
            </div>
            <motion.button
              initial={animateFrom}
              animate={isInView ? animateTo : animateFrom}
              transition={{ delay: 0.2 }}
              className={styles.button}
              type="submit"
            >
              Send
            </motion.button>
          </form>
        </div>
      </Container>
    </section>
  );
}
