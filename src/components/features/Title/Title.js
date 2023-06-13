import styles from "./Title.module.scss";

export default function Title({ adding, title }) {
  return (
    <div className={styles.title}>
      <h4>
        <span>{adding}</span>
        {title}
      </h4>
    </div>
  );
}
