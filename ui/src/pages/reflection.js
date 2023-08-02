import React from "react";
import Layout from "@theme/Layout";

import styles from "./reflection.module.css";
import Link from "@docusaurus/Link";

export default function About() {
  return (
    <Layout title="Our Team" description="Team Introduction">
      <div className={styles.container}>
        <h1>Reflection 📖✨</h1>
        <div>
          <p>
            Embarking on our Grove Quest project has been a voyage of discovery
            and innovation. This reflection essay compiles the varied insights
            and experiences, drawing lessons from our daily entries, weekly
            videos, poster, and other materials.
          </p>
          <ol>
            <li>
              <strong>Iterative Design Process</strong>: Iterative design
              process was pivotal in our journey (ref. Day
              <Link to="/dailies/day-7"> 7</Link>). By fostering a culture of
              continuous improvement, we crafted solutions through numerous
              prototypes. With each iteration, guided by feedback, we moved
              closer to realizing the vision our clients had in mind, aligning
              our design more precisely with their expectations and goals.
            </li>
            <li>
              <strong>User-Centric Approach</strong>: Our commitment to
              understanding the needs of our end-users has been vital (ref. Day
              <Link to="/dailies/day-3"> 3</Link>,
              <Link to="/dailies/day-6">6</Link>,
              <Link to="/dailies/day-8">8</Link>,
              <Link to="/dailies/day-11">11</Link>). The discovery that
              simplicity and accessibility are essential to user engagement
              shaped our design, leading to a more intuitive and seamless
              learning experience for students on field trips. Our user-centric
              approach was also tested and enhanced by the project's
              constraints.
            </li>
            <li>
              <strong>Innovation Amid Constraints</strong>: The constraints of
              the project acted as catalysts for creativity rather than
              obstacles (ref. Day <Link to="/dailies/day-6"> 6</Link>). From
              innovative solutions to Wi-Fi scarcity to thoughtful choices like
              dyslexic-friendly fonts, we infused our design with empathy and
              ingenuity. While our innovative solutions addressed constraints,
              we also sought harmony in the project's aesthetics and function.
            </li>
            <li>
              <strong>Balancing Form and Function</strong>: The interplay
              between design aesthetics and functionality played a significant
              role in our website and poster development (ref. Day{" "}
              <Link to="/dailies/day-8"> 8</Link>). Finding the right harmony
              between visual allure and essential information forged an engaging
              and informative experience for visitors.
            </li>
          </ol>
          <p>
            The Grove Quest project has been more than an academic task; it's
            been a transformative expedition filled with collaboration, empathy,
            and growth. Our reflection not only celebrates our triumphs but also
            acknowledges the winding path that led to progress. As we approach
            the project's completion, our insights into design and innovation
            now prepare us for new challenges. With Grove Quest as our
            foundation, we're ready for the next exciting endeavor.
          </p>
        </div>
      </div>
    </Layout>
  );
}
