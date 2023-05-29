import styles from './Mountains.module.scss'
import Container from '../../architecture/Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

const mountainIcon = <FontAwesomeIcon icon={faMountain} />

export default function Mountains() {
    return(
        <section className={styles.mountains}>
        <Container>
            <div className={styles.mountainsTitle}>
              <h4>MOUNTAINS <span>I've climbed</span></h4>
            </div>
            <div className={styles.mountainsClimbed}>

              <div className={styles.mountain}>
                <div className={styles.icon}>
                {mountainIcon}
                </div>
                <div className={styles.mountainTitle}>
                <p>Grossglockner 3798</p>
                </div>  
              </div> 

              <div className={styles.mountain}>
                <div className={styles.icon}>
                {mountainIcon}
                </div>
                <div className={styles.mountainTitle}>
                <p>Rysy 2499</p>
                </div>  
              </div> 

              <div className={styles.mountain}>
                <div className={styles.icon}>
                {mountainIcon}
                </div>
                <div className={styles.mountainTitle}>
                <p>Kozi Wierch 2291</p>
                </div>  
              </div> 

              <div className={styles.mountain}>
                <div className={styles.icon}>
                {mountainIcon}
                </div>
                <div className={styles.mountainTitle}>
                <p>Szpiglasowy<br></br> Wierch 2172 </p>
                </div>  
              </div> 

              <div className={styles.mountain}>
                <div className={styles.icon}>
                {mountainIcon}
                </div>
                <div className={styles.mountainTitle}>
                <p>Barania góra 1220</p>
                </div>  
              </div> 

              <div className={styles.mountain}>
                <div className={styles.icon}>
                {mountainIcon}
                </div>
                <div className={styles.mountainTitle}>
                <p>Śnieżka 1603</p>
                </div>  
              </div> 
            </div>
        </Container>
      </section>
    );
}