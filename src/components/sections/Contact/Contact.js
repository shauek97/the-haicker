import styles from './Contact.module.scss'



export default function Contact() {
    return(
        <section className={styles.contact}>
            <div className={styles.contactTitle}>
            <h4>CONTACT <span>me</span></h4>
            </div>
            <div className={styles.form}>
                <form action="https://formsubmit.co/e74bb1e61458f78724df9c5d8eee68fb" method="POST">
                <input type="text" name="name" placeholder='Name' required></input>
                <input type="email" name="email" placeholder='Email' required></input>
                <textarea name="content" placeholder="What's up?" required></textarea>
                <button type="submit">Send</button>
                </form>
            </div>

        </section>
    );
}