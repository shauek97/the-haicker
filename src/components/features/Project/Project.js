import styles from "./Project.module.scss";

export default function Project(props) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projectTitle}>
        <h5>{props.title}</h5>
      </div>
      <div className={styles.projectDescription}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
