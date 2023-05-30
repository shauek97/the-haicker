import styles from './Contact.module.scss'
import Container from '../../architecture/Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />



export default function Contact() {
    return(
        <section className={styles.contactSection}>
            <Container>
                <div className={styles.contactTitle}>
                <h4>CONTACT <span>me</span></h4>
                </div>

                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <div className={styles.icon}>{phoneIcon}</div>
                        <div className={styles.text}><p><span>Phone:</span> +48 664845934</p></div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>{envelopeIcon}</div>
                        <div className={styles.text}><p><span>Email:</span> wojciechszalk97@gmail.com</p></div>
                    </div>
                </div>

                <div className={styles.form}>
                    <form action="https://formsubmit.co/e74bb1e61458f78724df9c5d8eee68fb" method="POST">
                    <input type="text" name="name" placeholder='Name' required></input>
                    <input type="email" name="email" placeholder='Email' required></input>
                    <textarea name="content" placeholder="What's up?" required></textarea>
                    <button className={styles.button} type="submit">Send</button>
                    </form>
                </div>
            </Container>
        </section>
    );
}