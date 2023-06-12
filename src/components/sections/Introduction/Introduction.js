import styles from "./Introduction.module.scss";
import Container from "../../architecture/Container/Container";

export default function Header() {
  return (
    <>
      <section id="introduction" className={styles.faceHint}>
        <Container>
          <div className={styles.mainBox}>
            <div className={styles.imageBox}>
              <img
                src="https://i.postimg.cc/CMZ2hcfM/cvphoto.png"
                border="0"
                alt="cvphoto"
              />
            </div>

            <div className={styles.descriptionBox}>
              <p>
                My name is Wojciech Szałkiewicz and I am simple guy from Poland,
                which wants to bring mountains and programming to one place.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.introduction}>
        <div className={styles.textHolder}>
          <p>
            My main vision of this website is to create programming portfolio
            and blog, where I will write down every most important milestone of
            my programming and mountain hiking progress.
          </p>
        </div>
      </section>
    </>
  );
}
