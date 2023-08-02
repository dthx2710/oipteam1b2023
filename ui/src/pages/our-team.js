import React from "react";
import Layout from "@theme/Layout";
import Team1B from "@site/static/img/team/team1B.png";

import styles from "./our-team.module.css";
import Link from "@docusaurus/Link";

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
                University of Glasgow, Computing Science Undergraduates! (left
                to right)
              </strong>
            </p>
            <ul>
              <li>
                <Link to="https://github.com/KengLiChia">Keng Li Chia</Link> -
                Front-End Developer 👩‍💻
              </li>
              <li>
                <Link to="https://github.com/PriscillaThung">
                  Priscilla Thung Rui Yi
                </Link>
                - Front-End Developer 👩‍💻
              </li>
              <li>
                <Link to="https://github.com/XiangHui556">Xiang Hui Zhang</Link>
                - Game Developer 🎮
              </li>
              <li>
                <Link to="https://github.com/xKhronoz">Yee Kit Goh</Link> - Game
                Developer 🎮
              </li>
              <li>
                <Link to="https://github.com/zyferis">
                  Derick Kwok Jun Peng
                </Link>
                - Game Developer 🎮
              </li>
              <li>
                <Link to="https://github.com/dthx2710">Dylan Tok Hong Xun</Link>
                - Product Owner 👨‍💼
              </li>
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
