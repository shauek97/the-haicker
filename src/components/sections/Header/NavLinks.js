import { motion } from "framer-motion";
export default function NavLinks(props) {

    const getToAbout = () => {
        const element = document.getElementById('introduction');
        element.scrollIntoView({behavior: 'smooth'});
        props.closeMobileMenu();
      }
    
      const getToContact = () => {
        const element = document.getElementById('contact');
        element.scrollIntoView({ behavior: 'smooth' });
        props.closeMobileMenu();
      }

      const animateFrom = {opacity:0, y:-15}
      const animateTo = {opacity:1, y:0}

  return (
      <>
        <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>Home</motion.h2>
        <motion.h2 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.10}}
        onClick={getToAbout}>About</motion.h2>
        <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.20}}
        onClick={props.closeMobileMenu()}>Blog</motion.h2>
        <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.30}}
        >GitHub</motion.h2>
        <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.40}}
        onClick={getToContact}>Contact
        </motion.h2>
      </>
  );
}

