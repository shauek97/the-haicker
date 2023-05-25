import './../src/app.scss'
import { useState, useSyncExternalStore } from 'react';

export default function App() {

  return (
    <>
    <header className="header">
      
      <nav>
          <div className="container">
            <div className='navbar'>
                <div className="logo">
                  <img src='https://i.postimg.cc/T33bVnpt/the-hicker-black.png' border='0' alt='the-hicker-black'/>
                </div>                
                <div className="menu">
                  <h2>Home</h2>
                  <h2>About</h2>
                  <h2>Blog</h2>
                  <h2>GitHub</h2>
                  <h2>Contact</h2>
                </div>
            </div>   
          </div>
      </nav>
    </header>
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
      <section className="website-explain">
        <div className="text-holder">
          <p>
            My main vision of this website is to create portfolio and blog, where I will write down every most important milestone of my programming and mountain hiking progress.
          </p>
        </div>
      </section>
      <section className="skills">
        <div className='container'> 
          <div className="level-legend">
          <h4>SKILLS</h4>
            <div className="learning">
              <div className='icon-first'></div>
              <div className='text'>
                <p>Learning in progress.</p>
              </div>
            </div>
            <div className="almost-learned">
              <div className='icon-second'></div>
              <div className='text'><p>More than learning in progress.</p></div>
            </div>
            <div className="learned">
              <div className='icon-second'></div>
              <div className='text'><p>Well, it depends, but I can say I feel pretty sure in this case.</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>

    </footer>
    </>
  );

}

