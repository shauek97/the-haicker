import './../src/app.scss';
import Header from './components/sections/Header/Header';
import WelcomeSection from './components/sections/WelcomeSection/WelcomeSection';
import Introduction from './components/sections/Introduction/Introduction'
import Skills from './components/sections/Skills/Skills';
import Mountains from './components/sections/Mountains/Mountains';

import Projects from './components/sections/Projects/Projects';


export default function App() {
  return (
    <>
    <Header />
    <main>
      <WelcomeSection />
      <Introduction />
      <Skills />
      <Projects />
      <Mountains />
      
      
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

