import styles from "./Header.module.scss";

export default function NavLinks() {

    const getToAbout = () => {
        const element = document.getElementById('introduction');
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
    
      const getToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

  return (
      <>
        <h2>Home</h2>
        <h2 onClick={getToAbout}>About</h2>
        <h2>Blog</h2>
        <h2>GitHub</h2>
        <h2 onClick={getToContact}>Contact</h2>
      </>
  );
}

