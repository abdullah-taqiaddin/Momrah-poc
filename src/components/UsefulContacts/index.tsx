import React from "react";
import styles from "./style.module.css";
import IconButton from "../IconButton/index.tsx";

const UsefulContacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Useful Contacts</div>
      <div>
        <div className={styles.row}>
          <IconButton />
          <div className={styles.column}>
            <div className={styles.title}>{"Balady Reports"}</div>
            <div className={styles.subtitle}>{"940"}</div>
          </div>
        </div>
        <div className={styles.row}>
          <IconButton />
          <div className={styles.column}>
            <div className={styles.title}>{"Sakani"}</div>
            <div className={styles.subtitle}>{"19909"}</div>
          </div>
        </div>
        <div className={styles.row}>
          <IconButton />
          <div className={styles.column}>
            <div className={styles.title}>{"Balady"}</div>
            <div className={styles.subtitle}>{"19909"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulContacts;
