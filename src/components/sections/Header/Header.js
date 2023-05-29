import Container from '../../architecture/Container/Container';
import styles from './Header.module.scss';

export default function Header(){

    return(
    <header>
    <nav>
        <Container>
          <div className={styles.navbar}>
              <div className={styles.logo}>
                <img src='https://i.postimg.cc/T33bVnpt/the-hicker-black.png' border='0' alt='the-hicker-black'/>
              </div>                
              <div className={styles.menu}>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Blog</h2>
                <h2>GitHub</h2>
                <h2>Contact</h2>
              </div>
          </div>   
        </Container>
    </nav>
  </header>
  );
}