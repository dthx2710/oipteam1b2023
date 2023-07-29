import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Engaging Mini-Activites",
    Svg: require("@site/static/img/curiosity_child_pana.svg").default,
    description: (
      <>
        Interactive activities with Fossil Grove's pre-dinosaur era, tailored
        for primary school students.
      </>
    ),
  },
  {
    title: "Education Impact",
    Svg: require("@site/static/img/forest_bro.svg").default,
    description: (
      <>
        Immersive learning about an ancient world, predating the dinosaurs, and
        Fossil Grove's rich, diverse past.
      </>
    ),
  },
  {
    title: "Tech-Integrated Learning",
    Svg: require("@site/static/img/demo_amico.svg").default,
    description: (
      <>
        iPads enhancing an interactive journey back in time, boosting learning
        engagement and digital literacy.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{ textAlign: "center", paddingBottom: "2.5rem" }}>
          Project Highlights
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
