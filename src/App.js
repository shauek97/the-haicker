import './../src/app.scss'
import Header from './components/sections/Header/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

const mountainIcon = <FontAwesomeIcon icon={faMountain} />

export default function App() {

  return (
    <>
    <Header />
    <main>
      <section>
        <div className="background-image">
          <div className="container">
            <div className="title">
                <h1>WHEN MOUNTAINS<br></br> MEETS PROGRAMMING</h1>
            </div>    
            <div className="btn">About</div>
          </div>
        </div>
      </section>
      <section className='face-hint'>
        <div className="container">
          <div className="main-box">
            <div className="description-box">
              <h3>My name is Wojciech Szałkiewicz and I am simple guy from Poland, which wants to bring mountains and programming to one place.</h3>
            </div>
            <div className="image-box">
            <img src='https://i.postimg.cc/CMZ2hcfM/cvphoto.png' border='0' alt='cvphoto'/>
            </div>
          </div>
        </div>

      </section>
      <section className="introduction">
        <div className="text-holder">
          <p>
            My main vision of this website is to create programming portfolio and blog, where I will write down every most important milestone of my programming and mountain hiking progress.
          </p>
        </div>
      </section>
      <section className="skills">
        <div className='container'> 
        <div className='skills-title'>
          <h4><span>my </span>SKILLS</h4>
        </div>
          <div className="level-legend">
            <div className="learning">
              <div className='icon'><div className='icon-first'></div></div>
              <div className='text'><p>Learning in progress.</p></div>
            </div>
            <div className="almost-learned">
              <div className='icon'><div className='icon-second'></div></div>
              <div className='text'><p>Almost learned.</p></div>
            </div>
            <div className="learned">
              <div className='icon'><div className='icon-third'></div></div>
              <div className='text'><p>Well, it depends, but I can say I feel pretty sure in this case.</p></div>
            </div>
          </div>

          <div className='technologies'>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-third'></div></div>
              <div className='skill-text'><p>HTML</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-third'></div></div>
              <div className='skill-text'><p>CSS</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-third'></div></div>
              <div className='skill-text'><p>Sass</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-third'></div></div>
              <div className='skill-text'><p>RWD</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-third'></div></div>
              <div className='skill-text'><p>Bootstrap</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-second'></div></div>
              <div className='skill-text'><p>Javascript</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-first'></div></div>
              <div className='skill-text'><p>React</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-first'></div></div>
              <div className='skill-text'><p>Redux</p></div> 
            </div>
            <div className='technologie-box'>
              <div className='skill-icon'><div className='icon-first'></div></div>
              <div className='skill-text'><p>API</p></div> 
            </div>
          </div>
        </div>
      </section>
      
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
      <section className='mountains'>
        <div className='container'> 
            <div className='mountains-title'>
              <h4>MOUNTAINS <span>I've climbed</span></h4>
            </div>
            <div className='mountains-climbed'>

              <div className='mountain'>
                <div className='icon'>
                {mountainIcon}
                </div>
                <div className='mountain-title'>
                <p>Grossglockner 3798</p>
                </div>  
              </div> 

              <div className='mountain'>
                <div className='icon'>
                {mountainIcon}
                </div>
                <div className='mountain-title'>
                <p>Rysy 2499</p>
                </div>  
              </div> 

              <div className='mountain'>
                <div className='icon'>
                {mountainIcon}
                </div>
                <div className='mountain-title'>
                <p>Kozi Wierch 2291</p>
                </div>  
              </div> 

              <div className='mountain'>
                <div className='icon'>
                {mountainIcon}
                </div>
                <div className='mountain-title'>
                <p>Szpiglasowy<br></br> Wierch 2172 </p>
                </div>  
              </div> 

              <div className='mountain'>
                <div className='icon'>
                {mountainIcon}
                </div>
                <div className='mountain-title'>
                <p>Barania góra 1220</p>
                </div>  
              </div> 

              <div className='mountain'>
                <div className='icon'>
                {mountainIcon}
                </div>
                <div className='mountain-title'>
                <p>Śnieżka 1603</p>
                </div>  
              </div> 
            </div>
        </div>
      </section>
      <section className='contact'>
        <div className='contact-title'>
        <h4>CONTACT <span>me</span></h4>
        </div>
      </section>
    </main>
    <footer>
    </footer>
    </>
  );

}

