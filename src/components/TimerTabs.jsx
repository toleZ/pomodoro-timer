import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import Timer from "./Timer";

const TimerTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs
        align="center"
        variant={"soft-rounded"}
        onChange={(i) => setTabIndex(i)}
      >
        <TabList>
          <Tab>Pomodoro</Tab>
          <Tab>Short break</Tab>
          <Tab>Long break</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Timer initialMM={50} initialSS={0} tabIndex={tabIndex} />
          </TabPanel>
          <TabPanel>
            <Timer initialMM={10} initialSS={0} tabIndex={tabIndex} />
          </TabPanel>
          <TabPanel>
            <Timer initialMM={30} initialSS={0} tabIndex={tabIndex} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TimerTabs;
