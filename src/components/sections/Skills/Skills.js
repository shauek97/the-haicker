import styles from './Skills.module.scss';
import Container from '../../architecture/Container/Container';
import Title from '../../features/Title/Title';

export default function Skills() {
    return(
        <section className={styles.skills}>
        <Container>
          <Title adding={'my '} title={'SKILLS'}/>
            <div className={styles.levelLegend}>
              <div className={styles.learning}>
                <div className={styles.icon}><div className={styles.iconFirst}></div></div>
                <div className={styles.text}><p>Learning in progress.</p></div>
              </div>
              <div className={styles.learned}>
                <div className={styles.icon}><div className={styles.iconThird}></div></div>
                <div className={styles.text}><p>Well, it depends, but I can say I feel pretty sure in this case.</p></div>
              </div>
            </div>

            <div className={styles.technologies}>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconThird}></div></div>
                <div className={styles.skillText}><p>HTML</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconThird}></div></div>
                <div className={styles.skillText}><p>CSS</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconThird}></div></div>
                <div className={styles.skillText}><p>Sass</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconThird}></div></div>
                <div className={styles.skillText}><p>RWD</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconThird}></div></div>
                <div className={styles.skillText}><p>Bootstrap</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconFirst}></div></div>
                <div className={styles.skillText}><p>Javascript</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconFirst}></div></div>
                <div className={styles.skillText}><p>React</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconFirst}></div></div>
                <div className={styles.skillText}><p>Redux</p></div> 
              </div>
              <div className={styles.technologieBox}>
                <div className={styles.skillIcon}><div className={styles.iconFirst}></div></div>
                <div className={styles.skillText}><p>API</p></div> 
              </div>         
            </div>
        </Container>
      </section>
    );
}