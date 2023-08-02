import React from "react";
import Layout from "@theme/Layout";
import Team1B from "@site/static/img/team/team1B.png";

import styles from "./our-team.module.css";

export default function About() {
  return (
    <Layout title="Our Team" description="Team Introduction">
      <div className={styles.container}>
        <h1>Our Team</h1>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={Team1B} alt="OIP Team B" className={styles.image} />
          </div>
          <div className={styles.textWrapper}>
            <p>
              <strong>
                University of Glasgow, Computing Science Undergraduates! (left to right) 
              </strong>
            </p>
            <ul>
              <li>Keng Li Chia - Front-End Developer 👩‍💻</li>
              <li>Priscilla Thung Rui Yi - Front-End Developer 👩‍💻</li>
              <li>Xiang Hui Zhang - Game Developer 🎮</li>
              <li>Yee Kit Goh - Game Developer 🎮</li>
              <li>Derick Kwok Jun Peng - Game Developer 🎮</li>
              <li>Dylan Tok Hong Xun - Product Owner 👨‍💼</li>
            </ul>
            <p>
              We are a dynamic team of Computing Science undergraduates from the
              University of Glasgow, hailing from Singapore. United by our
              shared passion for excellence and innovation, each member brings
              unique expertise to the table, allowing us to create exceptional
              experiences for our clients. Together, we work in harmony to craft
              memorable solutions that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
