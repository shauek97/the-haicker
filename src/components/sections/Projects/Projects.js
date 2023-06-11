import styles from "./Projects.module.scss";
import Title from "../../features/Title/Title";
import Container from "../../architecture/Container/Container";
import { useState } from "react";
import Project from "../../features/Project/Project";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Waiter App",
      description:
        "A react application that allows to make reservation of table in restaurant",
    },

    {
      id: 2,
      title: "Calculator",
      description: "Basic Calculator made with vanilla JavaScript",
    },

    {
      id: 3,
      title: "Tic tac toe",
      description: "A tic tac toe pvp game made with vanilla JavaScript",
    },

    {
      id: 4,
      title: "Paper rock scissors",
      description: "A paper, rock, scissors game made in vanilla JavaScript",
    },
  ]);

  return (
    <section className={styles.projects}>
      <Container>
        <Title adding={"my "} title={"PROJECTS"} />

        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </Container>
    </section>
  );
}
