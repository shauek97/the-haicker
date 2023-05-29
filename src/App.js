import './../src/app.scss';
import Header from './components/sections/Header/Header';
import WelcomeSection from './components/sections/WelcomeSection/WelcomeSection';
import Introduction from './components/sections/Introduction/Introduction'
import Skills from './components/sections/Skills/Skills';
import Mountains from './components/sections/Mountains/Mountains';
import Contact from './components/sections/Contact/Contact';

import Projects from './components/sections/Projects/Projects';


export default function App() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <Introduction />
      <Skills />
      <Projects />
      <Mountains />
      <Contact />
      
      

    <footer>
    </footer>
    </>
  );

}

