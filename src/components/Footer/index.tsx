import React from "react";
import logo from "../../assets/mh-logo-white.png";
import visionLogo from "../../assets/image 9.svg";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.title}>Portal</div>
          <div className={styles.subTitle}>Laws, Regulations and the like</div>
          <div className={styles.subTitle}>Open Data Usage Policy</div>
          <div className={styles.subTitle}>Right to Information Policy</div>
          <div className={styles.subTitle}>Content Policy</div>
          <div className={styles.subTitle}>Privacy Policy</div>
          <div className={styles.subTitle}>Service Level Agreement</div>
          <div className={styles.subTitle}>Information Security</div>
          <div className={styles.subTitle}>Sitemap</div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Important Links</div>
          <div className={styles.subTitle}>Vision 2030</div>
          <div className={styles.subTitle}>Digital Government Authority</div>
          <div className={styles.subTitle}>National Unified Portal</div>
          <div className={styles.subTitle}>Etimad</div>
          <div className={styles.subTitle}>
            Reporting of Corruption to (Nazaha)
          </div>
          <div className={styles.subTitle}>Go to E-Mail</div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Contact Us</div>
          <div className={styles.subTitle}>Braches</div>
          <div className={styles.subTitle}>Contact Us</div>
          <div className={styles.subTitle}>FAQs</div>
        </div>

        <div className={styles.column}>
          <div className={`${styles.subTitle} ${styles.bold}`}>
            Balady Reports - 940
          </div>
          <div className={`${styles.subTitle} ${styles.bold}`}>
            Sakani - 19909
          </div>
          <div className={`${styles.subTitle} ${styles.bold}`}>
            Balady - 199040
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.mainLogo} alt="logo" />
          <img src={visionLogo} className={styles.mainLogo} alt="logo" />
        </div>
        <div className={styles.footerText}>
          All rights reserved - Ministry of Municipal and Rural Affairs and
          Housing 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
