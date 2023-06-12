import Container from "../../architecture/Container/Container";
import styles from "./WrongAddress.module.scss";


export default function WrongAddress() {

  return (
    <Container>

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
    </Container>
  );
}
