import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import styles from "./style.module.css";
import clockIcn from "../../assets/icons/clock-icn.svg";
import moneyIcn from "../../assets/icons/money-icn.svg";
import userIcn from "../../assets/icons/user-icn.svg";
import checkedIcn from "../../assets/icons/checked-icn.svg";
import HelpfulLinks from "../../components/HelpfulLinks";
import userIcons from "../../assets/Avatar Group.svg";
import Comment from "../../components/Comment";

import avatar1 from "../../assets/avatars/Avatar1.svg";
import avatar2 from "../../assets/avatars/Avatar2.svg";
import avatar3 from "../../assets/avatars/Avatar3.svg";
import avatar from "../../assets/avatars/Avatar.svg";
import IconButton from "../../components/IconButton";
// eslint-disable-line jsx-a11y/anchor-is-valid
const AccordionItemBody = ({ text }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <IconButton />
      <div style={{ fontSize: "16px", fontWeight: "400", color: "#1F2A37" }}>
        {text}
      </div>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="App-content">
      <div className={styles.heroSection}>
        <div className={styles.heroText}>
          Issuance of a license for correcting the status of an existing
          building
          <div className={styles.buttonGroup}>
            <Button variant={"secondary"} color={"white"}>
              More Details
            </Button>
            <Button variant={"primary"}>Start the service</Button>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.serviceDetailsContainer}>
          <div className={styles.serviceDetailsTitle}>
            Issuance of a license for correcting the status of an existing body
          </div>
          <div className={styles.serviceDetailsSubTitle}>
            The procedure that issues a license for correcting the status of an
            existing building
          </div>
          <div className={styles.serviceDetailsContent}>
            <div className={styles.serviceDetailItem}>
              <div className={styles.iconContainer}>
                <img src={clockIcn} alt="clock icon" />
              </div>
              <div className={styles.serviceDetailText}>
                3 minutes to complete
              </div>
            </div>
            <div className={styles.serviceDetailItem}>
              <div className={styles.iconContainer}>
                <img src={moneyIcn} alt="money icon" />
              </div>
              <div className={styles.serviceDetailText}>
                <a
                  href="#"
                  style={{
                    color: "#1B8354",
                    textDecorationColor: "#1B8354",
                    textDecoration: "underline",
                  }}
                >
                  Service Fees
                </a>
                {/* // eslint-disable-line jsx-a11y/anchor-is-valid */}
              </div>
            </div>
            <div className={styles.serviceDetailItem}>
              <div className={styles.iconContainer}>
                <img src={userIcn} alt="user icon" />
              </div>
              <div className={styles.serviceDetailText}>
                For business, individuals, non-profit organisations and
                government agencies
              </div>
            </div>
            <div className={styles.serviceDetailItem}>
              <div className={styles.iconContainer}>
                <img src={checkedIcn} alt="checked icon" />
              </div>
              <div className={styles.serviceDetailText}>
                6758 service visits
              </div>
            </div>
          </div>
          <div className={styles.buttonGroupEnd}>
            <Button variant={"secondary"}>More details</Button>
            <Button variant={"primary"}> Start the service</Button>
          </div>
        </div>
        <HelpfulLinks />
      </div>
      <div className={styles.accordionContainer}>
        <Accordion allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={isExpanded ? styles.active : styles.inactive}
                    >
                      Procedures
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.accordionPanel}>
                  <AccordionItemBody text={"Access Balady through Absher."} />
                  <AccordionItemBody
                    text={"Select construction license services"}
                  />
                  <AccordionItemBody
                    text={
                      "Select the service of issuing a license for correcting the status of an existing building"
                    }
                  />
                  <AccordionItemBody
                    text={
                      "Review the instructions and acknowledge the accuracy of the information"
                    }
                  />
                  <AccordionItemBody text={"Verify the mobile phone number"} />
                  <AccordionItemBody
                    text={"Specify the type of owner and applicant"}
                  />
                  <AccordionItemBody
                    text={
                      "Select the building license or survey decision for which you want to obtain a license for correcting the status of an existing building."
                    }
                  />
                  <AccordionItemBody text={"Select the engineering office"} />
                  <AccordionItemBody
                    text={"Send the application to the engineering office"}
                  />
                  <AccordionItemBody
                    text={
                      "The engineering office completes the data and prepares the required plans"
                    }
                  />
                  <AccordionItemBody
                    text={"The municipality calculates fines and penalties."}
                  />
                  <AccordionItemBody
                    text={"A payment invoice will be issued"}
                  />
                  <AccordionItemBody
                    text={
                      "After the fees are paid, the license will be issued, and you can print it out."
                    }
                  />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={isExpanded ? styles.active : styles.inactive}
                    >
                      Service Channels
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.accordionPanel}>
                  <AccordionItemBody text={"E-Portal"} />

                  <AccordionItemBody text={"Balady App"} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={isExpanded ? styles.active : styles.inactive}
                    >
                      Fines and Penalties
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.accordionPanel}>
                  <AccordionItemBody
                    text={
                      <a
                        href="https://balady.gov.sa/Services/DownloadAttachment/22"
                        style={{
                          color: "#1B8354",
                          textDecorationColor: "#1B8354",
                          textDecoration: "underline",
                        }}
                      >
                        https://balady.gov.sa/Services/DownloadAttachment/22
                      </a> // eslint-disable-line jsx-a11y/anchor-is-valid
                    }
                  />

                  {/* <AccordionItemBody text={"text"} /> */}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={isExpanded ? styles.active : styles.inactive}
                    >
                      Required Documents
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.accordionPanel}>
                  <AccordionItemBody
                    text={"Contracting with an engineering office"}
                  />

                  <AccordionItemBody text={"Payment of the services fees"} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={isExpanded ? styles.active : styles.inactive}
                    >
                      Service Level Agreement
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.accordionPanel}>
                  <AccordionItemBody
                    text={
                      <a
                        href="https://momrah.gov.sa/ar/node/3442"
                        style={{
                          color: "#1B8354",
                          textDecorationColor: "#1B8354",
                          textDecoration: "underline",
                        }}
                      >
                        https://momrah.gov.sa/ar/node/3442
                      </a> // eslint-disable-line jsx-a11y/anchor-is-valid
                    }
                  />

                  {/* <AccordionItemBody text={"text"} /> */}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsHeader}>Comments</div>
        <div className={styles.commentsAvatar}>
          <img src={userIcons} alt="user icons" />
        </div>
        <div className={styles.commentsList}>
          <Comment
            avatar={avatar1}
            commentText="The process of obtaining a license for correcting the status of our existing building was seamless with their service."
            name="Dana Abdullah"
            date="22 Days ago"
          />
          <Comment
            isReply={true}
            avatar={avatar2}
            commentText="Thank you for your feedback Dana!"
            name="Sara Mahmood"
            date="22 Days ago"
          />
          <Comment
            avatar={avatar3}
            commentText="Securing a license to correct the status of our existing building was quick and hassle-free with their help."
            name="Mohammed Al Hani"
            date="22 Days ago"
          />
          <Comment
            avatar={avatar}
            commentText="Getting the license to correct the status of our building was a breeze thanks to this exceptional service."
            name="Aaliyah Faisal"
            date="22 Days ago"
          />
          <div className={styles.commentInputContainer}>
            <Box className={styles.commentInputBox}>
              <Input
                className={styles.commentTextarea}
                placeholder="Enter your comment"
                as="textarea"
              />
              <Button className={styles.commentButton} variant={"primary"}>
                Add Comment
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
