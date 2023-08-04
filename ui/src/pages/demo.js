import React from "react";
import Layout from "@theme/Layout";

import styles from "./demo.module.css";

export default function About() {
  return (
    <Layout title="Demo" description="Team Introduction">
      <div className={styles.container}>
        <h1>Grove Quest Demo 🌳</h1>
        <div className={styles.iframeContainer}>
          <iframe
            className={styles.iframe}
            src={
              "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcpZj0jrg4ur1OmgpHpMLsD%2FGrove-Quest-App-UI%3Ftype%3Ddesign%26node-id%3D1106-11784%26t%3DAgVFLvjlAXjCPeX9-1%26scaling%3Dscale-down%26starting-point-node-id%3D1106%253A11784%26mode%3Ddesign"
            }
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
