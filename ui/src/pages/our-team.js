import React from "react";
import Layout from "@theme/Layout";
import Team1B from "@site/static/img/team/team1B.png";

import styles from "./our-team.module.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
                Meet our team! (From left
                to right)
              </strong>
            </p>
            <ul>
              <li>
                Keng Li Chia - Front-End Developer
                <a href="https://linkedin.com/in/kenglichia">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0077b5",
                      fontSize: "1.35rem",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </a>
                <a href="https://github.com/KengLiChia">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#75278b",
                      fontSize: "1.35rem",
                      paddingLeft: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li>
                Priscilla Thung Rui Yi - Front-End Developer
                <a href="https://linkedin.com/in/priscilla-thung">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0077b5",
                      fontSize: "1.35rem",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </a>
                <a href="https://github.com/PriscillaThung">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#75278b",
                      fontSize: "1.35rem",
                      paddingLeft: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li>
                Xiang Hui Zhang - Game Developer
                <a href="https://linkedin.com/in/xianghui-zhang">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0077b5",
                      fontSize: "1.35rem",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </a>
                <a href="https://github.com/XiangHui556">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#75278b",
                      fontSize: "1.35rem",
                      paddingLeft: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li>
                Yee Kit Goh - Game Developer
                <a href="https://linkedin.com/in/goh-yee-kit/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0077b5",
                      fontSize: "1.35rem",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </a>
                <a href="https://github.com/xKhronoz">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#75278b",
                      fontSize: "1.35rem",
                      paddingLeft: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li>
                Derick Kwok Jun Peng - Game Developer
                <a href="https://linkedin.com/in/derick-kwok-263518261">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0077b5",
                      fontSize: "1.44rem",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </a>
                <a href="https://github.com/zyferis">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#75278b",
                      fontSize: "1.35rem",
                      paddingLeft: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li>
                Dylan Tok Hong Xun - Product Owner
                <a href="https://linkedin.com/in/dylan-tok-hong-xun">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0077b5",
                      fontSize: "1.35rem",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </a>
                <a href="https://github.com/dthx2710">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#75278b",
                      fontSize: "1.35rem",
                      paddingLeft: "0.3rem",
                    }}
                  />
                </a>
              </li>
            </ul>
            <p>
              We are a team of Computing Science undergraduates,
              enrolled in a joint degree program between the Singapore Institute
              of Technology (SIT) and the University of Glasgow. United by our
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
