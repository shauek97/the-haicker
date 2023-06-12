import styles from "./Introduction.module.scss";
import Container from "../../architecture/Container/Container";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Header() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <section id="introduction" className={styles.faceHint}>
        <Container>
          <div className={styles.mainBox}>

          <span
          style={{
            transform: isInView ? "scale:1" : "scale:0",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <div
            ref={ref}
            className={styles.imageBox}>
              <img
                src="https://i.postimg.cc/CMZ2hcfM/cvphoto.png"
                border="0"
                alt="cvphoto"
              />
            </div>
          </span>  

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
