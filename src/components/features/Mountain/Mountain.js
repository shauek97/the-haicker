import styles from "./Mountain.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

const mountainIcon = <FontAwesomeIcon icon={faMountain} />;

export default function Mountain(props) {
  return (
    <div className={styles.mountain}>
      <div className={styles.icon}>{mountainIcon}</div>
      <div className={styles.mountainTitle}>
        <p>
          {props.name} {props.height}
        </p>
      </div>
    </div>
  );
}
