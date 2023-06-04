import Container from "../../architecture/Container/Container";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.scss";

export default function Header() {

  const getToAbout = () => {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  const getToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header>
      <nav>
        <Container>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <img
                src="https://i.postimg.cc/T33bVnpt/the-hicker-black.png"
                border="0"
                alt="the-hicker-black"
              />
            </div>
            <Menu getToContact={getToContact} getToAbout={getToAbout}/>
            <MobileMenu getToContact={getToContact} getToAbout={getToAbout}/>
          </div>
        </Container>
      </nav>
    </header>
  );
}
