import styles from './Skills.module.scss'
import Container from '../../architecture/Container/Container'

export default function Skills() {
    return(
        <section className={styles.skills}>
        <Container>
          <div className={styles.skillsTitle}>
            <h4><span>my </span>SKILLS</h4>
          </div>
            <div className={styles.levelLegend}>
              <div className={styles.learning}>
                <div className={styles.icon}><div className={styles.iconFirst}></div></div>
                <div className={styles.text}><p>Learning in progress.</p></div>
              </div>
              <div className={styles.almostLearned}>
                <div className={styles.icon}><div className={styles.iconSecond}></div></div>
                <div className={styles.text}><p>Almost learned.</p></div>
              </div>
              <div className={styles.almostLearned}>
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
                <div className={styles.skillIcon}><div className={styles.iconSecond}></div></div>
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