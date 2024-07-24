import React, { useState, useEffect } from "react";
import logo from "../../assets/mh-logo-white.png";
import styles from "./style.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icn.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings.icn.svg";
import { ReactComponent as AccessabilityIcon } from "../../assets/icons/accessability-icn.svg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerOpen]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className={styles.MainHeader}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          paddingLeft: "2rem",
        }}
      >
        <img
          src={logo}
          className={styles.MainLogo}
          alt="logo"
          style={{ maxWidth: "80px", maxHeight: "30px" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            gap: "0.5rem",
          }}
        >
          {/* Header icons and links */}
          <div className={styles.HeaderIcons}>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                Programs
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.Icon}
                >
                  <g id="elements">
                    <path
                      id="Icon"
                      d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <div className={styles.ContactLinkHighlight}></div>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                E-Services
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.Icon}
                >
                  <g id="elements">
                    <path
                      id="Icon"
                      d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <div className={styles.ContactLinkHighlight}></div>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                Projects
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.Icon}
                >
                  <g id="elements">
                    <path
                      id="Icon"
                      d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <div className={styles.ContactLinkHighlight}></div>
            </div>{" "}
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                Laws
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.Icon}
                >
                  <g id="elements">
                    <path
                      id="Icon"
                      d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <div className={styles.ContactLinkHighlight}></div>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                Knowledge
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.Icon}
                >
                  <g id="elements">
                    <path
                      id="Icon"
                      d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <div className={styles.ContactLinkHighlight}></div>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                Media
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.Icon}
                >
                  <g id="elements">
                    <path
                      id="Icon"
                      d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <div className={styles.ContactLinkHighlight}></div>
            </div>
          </div>
          {/* Repeat the above block for other links */}
        </div>
      </div>

      <div className={styles.HeaderIcons}>
        <div className={styles.ContactLinkContainer}>
          <a
            className={`${styles.Mainlink} ${styles.ContactLink}`}
            href="#contact"
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.Icon}
            >
              <g id="elements">
                <path
                  id="Icon"
                  d="M1.5031 1.1294C1.60467 1.26388 1.90793 1.66534 2.08853 1.89676C2.45026 2.36027 2.94452 2.97618 3.47769 3.59026C4.01356 4.20744 4.57648 4.80852 5.07658 5.25039C5.32734 5.47195 5.54762 5.64031 5.72939 5.74989C5.90035 5.85296 6.00134 5.87439 6.00134 5.87439C6.00134 5.87439 6.09936 5.85295 6.27031 5.7499C6.45209 5.64032 6.67237 5.47196 6.92313 5.25039C7.42322 4.80852 7.98615 4.20744 8.52201 3.59025C9.05518 2.97616 9.54944 2.36025 9.91117 1.89673C10.0918 1.66531 10.3946 1.26442 10.4962 1.12994C10.7009 0.852004 11.0925 0.792058 11.3705 0.996751C11.6484 1.20145 11.7078 1.59269 11.5031 1.87063L11.5015 1.87273C11.395 2.01376 11.0809 2.42963 10.8966 2.66577C10.5267 3.13975 10.018 3.77384 9.46589 4.40976C8.91646 5.04257 8.31173 5.69149 7.7508 6.18712C7.47105 6.4343 7.18747 6.65656 6.91567 6.82042C6.66102 6.97393 6.33861 7.125 5.99985 7.125C5.66109 7.125 5.33868 6.97393 5.08404 6.82041C4.81223 6.65656 4.52866 6.4343 4.24891 6.18712C3.68798 5.69149 3.08325 5.04258 2.53382 4.40977C1.98169 3.77386 1.473 3.13978 1.1031 2.6658C0.918709 2.42953 0.60464 2.01371 0.4983 1.87292L0.4969 1.87107C0.292204 1.59313 0.351284 1.20149 0.629218 0.996793C0.907143 0.792105 1.2984 0.851493 1.5031 1.1294Z"
                  fill="currentColor"
                />
              </g>
            </svg>
            Contact
          </a>
          <div className={styles.ContactLinkHighlight}></div>
        </div>
        <SearchIcon className={styles.Icon} />
        <SettingIcon className={styles.Icon} />
        <AccessabilityIcon className={styles.Icon} />
      </div>
      <button className={styles.DrawerButton} onClick={toggleDrawer}>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="elements">
            <g id="Icon">
              <path
                d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H17C17.4142 0.25 17.75 0.585788 17.75 1C17.75 1.41422 17.4142 1.75 17 1.75L1 1.75C0.585786 1.75 0.25 1.41421 0.25 1Z"
                fill="white"
              />
              <path
                d="M0.25 8C0.25 7.58579 0.585786 7.25 1 7.25L17 7.25C17.4142 7.25 17.75 7.58579 17.75 8C17.75 8.41422 17.4142 8.75 17 8.75L1 8.75C0.585786 8.75 0.25 8.41421 0.25 8Z"
                fill="white"
              />
              <path
                d="M1 14.25C0.585786 14.25 0.25 14.5858 0.25 15C0.25 15.4142 0.585786 15.75 1 15.75L17 15.75C17.4142 15.75 17.75 15.4142 17.75 15C17.75 14.5858 17.4142 14.25 17 14.25L1 14.25Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </button>
      {drawerOpen && (
        <div className={styles.Drawer}>
          <div className={styles.DrawerHeader}>
            <img
              src={logo}
              className={styles.MainLogo}
              alt="logo"
              style={{ maxWidth: "80px", maxHeight: "30px" }}
            />
            <button className={styles.CloseButton} onClick={toggleDrawer}>
              X
            </button>
          </div>
          <div className={styles.DrawerContent}>
            {/* Drawer content (nav items) goes here */}
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#programs"
              >
                Programs
              </a>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#services"
              >
                E-Services
              </a>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#projects"
              >
                Projects
              </a>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#laws"
              >
                Laws
              </a>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#knowledge"
              >
                Knowledge
              </a>
            </div>
            <div className={styles.ContactLinkContainer}>
              <a
                className={`${styles.Mainlink} ${styles.ContactLink}`}
                href="#media"
              >
                Media
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
