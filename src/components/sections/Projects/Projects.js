import styles from './Projects.module.scss'
import Container from '../../architecture/Container/Container'

export default function Projects() {
    return(
        <section className='projects'>
        <div className='container'> 
          <div className='projects-title'>
            <h4><span>my </span>PROJECTS</h4>
          </div>
          <div className='projects-list'>
            <div className='project-box'>
              <div className='project-title'><h5>Waiter App</h5></div>
              <div className='project-description'><p>A react application that allows to make reservation of table in restaurant</p></div>
            </div>
            <div className='project-box'>
              <div className='project-title'><h5>Calculator</h5></div>
              <div className='project-description'><p>Basic Calculator made in vanilla javascript</p></div>
            </div>
            <div className='project-box'>
              <div className='project-title'><h5>Tic tac toe</h5></div>
              <div className='project-description'><p>A tic tac toe pvp game made in vanilla javascript</p></div>
            </div>
            <div className='project-box'>
              <div className='project-title'><h5>Paper rock scissors</h5></div>
              <div className='project-description'><p>A paper, rock, scissors game made in vanilla javascript</p></div>
            </div>
            <div className='ps'>
            <p>For more projects do step into my <div className="github">GitHub.</div></p>
            </div>
          </div>
        </div>
      </section>

    )
}