import styles from './WelcomeSection.module.scss';
import Container from '../../architecture/Container/Container';

export default function App() {
    return (
        <section>
        <div className={styles.backgroundImage}>
          <Container>
            <div className={styles.workState}>
              
            </div>
            <div className={styles.title}>
                <h1>WHEN MOUNTAINS<br></br> MEETS PROGRAMMING</h1>
            </div>    
            <div className={styles.btn}>About</div>
          </Container>
        </div>
      </section>
    );
}