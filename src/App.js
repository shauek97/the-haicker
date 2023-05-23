import './../src/app.scss'

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
      <section className='about'>
        
      </section>
    </main>
    <footer>

    </footer>
    </>
  );

}

