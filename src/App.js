import './../src/app.scss';
import Header from './components/sections/Header/Header';
import WelcomeSection from './components/sections/WelcomeSection/WelcomeSection';
import Introduction from './components/sections/Introduction/Introduction'
import Skills from './components/sections/Skills/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
const mountainIcon = <FontAwesomeIcon icon={faMountain} />

export default function App() {
  return (
    <>
    <Header />
    <main>
      <WelcomeSection />
      <Introduction />
      <Skills />
      
      
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

