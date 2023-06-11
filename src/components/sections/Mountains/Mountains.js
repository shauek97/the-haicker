import styles from "./Mountains.module.scss";
import Container from "../../architecture/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Mountain from "../../features/Mountain/Mountain";

const mountainIcon = <FontAwesomeIcon icon={faMountain} />;

export default function Mountains() {
  const [mountains, setMountains] = useState([
    {
      id: 1,
      name: "Grossglockner",
      height: "3798",
    },

    {
      id: 2,
      name: "Rysy",
      height: "2499",
    },

    {
      id: 3,
      name: "Kozi Wierch",
      height: "2291",
    },

    {
      id: 4,
      name: "Barania góra",
      height: "1220",
    },

    {
      id: 5,
      name: "Śnieżka",
      height: "1603",
    },
  ]);

  return (
    <section className={styles.mountains}>
      <Container>
        <div className={styles.mountainsTitle}>
          <h4>
            MOUNTAINS <span>I've climbed</span>
          </h4>
        </div>
        <div className={styles.mountainsClimbed}>
          {mountains.map((mountain) => (
            <Mountain
              key={mountain.id}
              name={mountain.name}
              height={mountain.height}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
