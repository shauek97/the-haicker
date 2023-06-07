import styles from './Projects.module.scss'
import Title from '../../features/Title/Title'
import Container from '../../architecture/Container/Container'

export default function Projects() {
    return(
        <section className={styles.projects}>
        <Container>
        <Title adding={'my '} title={'PROJECTS'}/>
          <div className={styles.projectList}>
            <div className={styles.projectBox}>
              <div className={styles.projectTitle}><h5>Waiter App</h5></div>
              <div className={styles.projectDescription}><p>A react application that allows to make reservation of table in restaurant</p></div>
            </div>
            <div className={styles.projectBox}>
              <div className={styles.projectTitle}><h5>Calculator</h5></div>
              <div className={styles.projectDescription}><p>Basic Calculator made in vanilla javascript</p></div>
            </div>
            <div className={styles.projectBox}>
              <div className={styles.projectTitle}><h5>Tic tac toe</h5></div>
              <div className={styles.projectDescription}><p>A tic tac toe pvp game made in vanilla javascript</p></div>
            </div>
            <div className={styles.projectBox}>
              <div className={styles.projectTitle}><h5>Paper rock scissors</h5></div>
              <div className={styles.projectDescription}><p>A paper, rock, scissors game made in vanilla javascript</p></div>
            </div>
            <div className={styles.ps}>
            <p>For more projects do step into my <div className={styles.github}>GitHub.</div></p>
            </div>
          </div>
        </Container>
      </section>

    )
}