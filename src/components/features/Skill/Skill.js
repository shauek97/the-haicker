import styles from "./Skill.module.scss";

export default function Skill(props) {
  return (
    <div className={styles.technologieBox}>
      <div className={styles.skillIcon}>
        <div
          className={
            props.level === "learned" ? styles.iconThird : styles.iconFirst
          }
        ></div>
      </div>
      <div className={styles.skillText}>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
