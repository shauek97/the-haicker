import 
export default function NavLinks(props) {

    const getToAbout = () => {
        const element = document.getElementById('introduction');
        element.scrollIntoView({behavior: 'smooth'});
        props.closeMobileMenu();
      }
    
      const getToContact = () => {
        const element = document.getElementById('contact');
        element.scrollIntoView({ behavior: 'smooth' });
        props.closeMobileMenu();
      }

  return (
      <>
        <h2 onClick={props.closeMobileMenu}>Home</h2>
        <h2 onClick={getToAbout}>About</h2>
        <h2 onClick={props.closeMobileMenu}>Blog</h2>
        <h2>GitHub</h2>
        <h2 onClick={getToContact}>Contact</h2>
      </>
  );
}

