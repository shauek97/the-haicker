import styles from "./Projects.module.scss";
import Title from "../../features/Title/Title";
import Container from "../../architecture/Container/Container";
import { useState } from "react";
import Project from "../../features/Project/Project";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "ATH CAR",
      description:
        "Commercial react application made for an Uber car partner.",
      url: 'https://github.com/shauek97/ast-cars',
    },

    {
      id: 2,
      title: "Plan your gainzz",
      description:
        "React application which functionality allows user to create his own training plan",
      url: 'https://github.com/shauek97/plan-your-gainz',
    },

    {
      id: 3,
      title: "Calculator",
      description: "Basic Calculator made with vanilla JavaScript",
      url: 'https://calculator.shauek97.repl.co',
    },

    {
      id: 4,
      title: "Tic tac toe",
      description: "A tic tac toe pvp game made with vanilla JavaScript",
      url: 'https://tic-tac-toe.shauek97.repl.co',
    },

    {
      id: 5,
      title: "Paper rock scissors",
      description: "A paper, rock, scissors game made in vanilla JavaScript",
      url: 'https://github.com/shauek97/Paper.-rock-scissors',
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
            url={project.url}
          />
        ))}
        <div className={styles.ps}>
          <p>
            For more projects do step into my
            <Link className={styles.link} to="https://github.com/shauek97">
              <div className={styles.github}>GitHub.</div>
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
