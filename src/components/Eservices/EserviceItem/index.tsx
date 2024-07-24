import React from "react";

import styles from "./style.module.css";
import { Button } from "@chakra-ui/react";

interface IEserviceItemProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: string;
}

const EserviceItem = ({
  title,
  subtitle,
  buttonTitle,
  icon,
}: IEserviceItemProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.iconContainer}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.column}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <Button variant={"primary"}>{buttonTitle}</Button>
      </div>
    </div>
  );
};

export default EserviceItem;
