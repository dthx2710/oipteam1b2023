import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Team1B from "@site/static/img/team1B.png";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/ideation-process/aligning-mental-models"
          >
            Ideation Process 💡
          </Link>
        </div>
      </div>
    </header>
  );
}
function TeamIntroduction() {
  return (
    <div className="container margin-vert--lg">
      <h1 style={{ textAlign: "center", paddingBottom: "2.5rem" }}>Our Team</h1>
      <div className="row">
        <div className="col col--6">
          <img
            className={styles.teamImage}
            src={Team1B}
            alt="OIP Team B"
            style={{ width: "100%", borderRadius: "2.2rem" }}
          />
        </div>
        <div className="col col--6">
          <p>
            <strong>Meet Our Awesome Team (from left to right)! 🌟</strong>
            <ul>
              <li>Keng Li Chia - Front-End Developer 👩‍💻</li>
              <li>Priscilla Thung Rui Yi - Front-End Developer 👩‍💻</li>
              <li>Xiang Hui Zhang - Game Developer 🎮</li>
              <li>Yee Kit Goh - Game Developer 🎮</li>
              <li>Derick Kwok Jun Peng - Game Developer 🎮</li>
              <li>Dylan Tok Hong Xun - Product Owner 👨‍💼</li>
            </ul>
            We are a dynamic team, united by our shared passion for excellence
            and innovation. Each member brings unique expertise to the table,
            allowing us to create exceptional experiences for our clients.
            Together, we work in harmony to craft memorable solutions that leave
            a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TeamIntroduction />
      </main>
    </Layout>
  );
}
