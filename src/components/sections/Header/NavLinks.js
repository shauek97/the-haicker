import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavLinks(props) {
  const getToAbout = () => {
    const element = document.getElementById("introduction");
    element.scrollIntoView({ behavior: "smooth" });
    props.closeMobileMenu();
  };

  const getToContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
    props.closeMobileMenu();
  };

  const getToSkills = () => {
    const element = document.getElementById("skills");
    element.scrollIntoView({ behavior: "smooth" });
    props.closeMobileMenu();
  };

  const location = useLocation();
  const currentPathname = location.pathname;

  const animateFrom = { opacity: 0, y: -15 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>

<NavLink className={styles.navLink} to="/">
        <motion.h2
          className={currentPathname === '/' && styles.hidden}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Home
        </motion.h2>
      </NavLink>

      <motion.h2
      className={currentPathname === '/blog' && styles.hidden}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => {
          getToAbout();
        }}
      >
        About
      </motion.h2>

      <motion.h2
        className={currentPathname === '/blog' && styles.hidden}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => {
          getToSkills();
        }}
      >
        Skills
      </motion.h2>

      <NavLink className={styles.navLink} to="/blog">
        <motion.h2
          className={currentPathname === '/blog' && styles.hidden}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Blog
        </motion.h2>
      </NavLink>

      <NavLink className={styles.navLink} to="https://github.com/shauek97">
        <motion.h2
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          GitHub
        </motion.h2>
      </NavLink>

      <motion.h2
        className={currentPathname === '/blog' && styles.hidden}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => {
          getToContact();
        }}
      >
        Contact
      </motion.h2>
    </>
  );
}
