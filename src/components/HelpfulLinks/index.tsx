import React from "react";
import styles from "./style.module.css";
import IconButton from "../IconButton/index.tsx";

const HelpfulLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Helpful Link</div>
      <div>
        <div className={styles.row}>
          <IconButton />
          <div className={styles.column}>
            <div className={styles.title}>
              <a
                href="#"
                style={{
                  color: "#1B8354",
                  textDecorationColor: "#1B8354",
                  textDecoration: "underline",
                }}
              >
                Balady Reports
              </a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <IconButton />
          <div className={styles.column}>
            <div className={styles.title}>
              <a
                href="#"
                style={{
                  color: "#1B8354",
                  textDecorationColor: "#1B8354",
                  textDecoration: "underline",
                }}
              >
                {" "}
                Sakani
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpfulLinks;
