import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Box,
  useStyleConfig,
} from "@chakra-ui/react";
import styles from "./style.module.css";
import EserviceItem from "./EserviceItem/index.tsx";
import { ReactComponent as housingAffairsIcn } from "../../assets/icons/housingAffairs-icn.svg";
import { ReactComponent as municipalAffairsIcn } from "../../assets/icons/municipalAffairs-icn.svg";
import { ReactComponent as allIcn } from "../../assets/icons/all-icn.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more-icn.svg";
import badgeIcon from "../../assets/icons/id-badge-icn.svg";
import certIcon from "../../assets/icons/certified-icn.svg";
import checkedIcon from "../../assets/icons/checked-icn.svg";
import heartIcon from "../../assets/icons/heart-icn.svg";

const CustomTab = (props) => {
  const { icon, children, isSelected, ...rest } = props;
  const tabStyles = useStyleConfig("CustomTab", { isSelected });

  return (
    <Tab
      __css={tabStyles}
      {...rest}
      _selected={{
        fontWeight: "600",
        color: "black",
        borderColor: "#1B8354",
        borderBottomWidth: "2px",
        svg: {
          path: {
            fill: "#1B8354",
          },
        },
      }}
    >
      <Box as="span" display="flex" alignItems="center">
        <Box
          as={icon}
          marginRight="8px"
          sx={{ path: { fill: isSelected ? "#1B8354" : "currentColor" } }}
        />
        {children}
      </Box>
    </Tab>
  );
};

const Eservice = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>E-Services</div>
      <Tabs variant="customUnderline">
        <TabList style={{ overflow: "scroll" }}>
          <CustomTab icon={allIcn}>All</CustomTab>
          <CustomTab icon={housingAffairsIcn}>Housing Affairs</CustomTab>
          <CustomTab icon={municipalAffairsIcn}>Municipal Affairs</CustomTab>
          <Tab>
            <MoreIcon />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className={styles.eservicesContainer}>
              <EserviceItem
                icon={badgeIcon}
                buttonTitle="Start the service"
                title={"Cancellation of permit to supply tobacco products"}
                subtitle={"Commercial Services"}
              />
              <EserviceItem
                icon={certIcon}
                buttonTitle="Start the service"
                title={"Cancellation of permit to supply tobacco products"}
                subtitle={"Commercial Services"}
              />
              <EserviceItem
                icon={checkedIcon}
                buttonTitle="Start the service"
                title={"Cancellation of permit to supply tobacco products"}
                subtitle={"Commercial Services"}
              />
              <EserviceItem
                icon={heartIcon}
                buttonTitle="Start the service"
                title={"Cancellation of permit to supply tobacco products"}
                subtitle={"Commercial Services"}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <p>Housing Affairs</p>
          </TabPanel>
          <TabPanel>
            <p>Municipal Affairs</p>
          </TabPanel>
          <TabPanel>
            <p>More</p>
          </TabPanel>
        </TabPanels>
        <Button variant={"secondary"}>Browse All Services</Button>
      </Tabs>
    </div>
  );
};

export default Eservice;
