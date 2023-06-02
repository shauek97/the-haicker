import Container from "../../architecture/Container/Container";
import styles from "./Blog.module.scss";

export default function Blog() {

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
            <div className={styles.menu}>
              <h2>Home</h2>
              <h2 onClick={getToAbout}>About</h2>
              <h2>Blog</h2>
              <h2>GitHub</h2>
              <h2 onClick={getToContact}>Contact</h2>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
