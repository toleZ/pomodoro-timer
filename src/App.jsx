import { Center } from "@chakra-ui/react";
import ThemeSwitch from "./components/ThemeSwitch";
import TimerTabs from "./components/TimerTabs";

const App = () => {
  return (
    <Center minH="100vh">
      <TimerTabs />
      <ThemeSwitch />
    </Center>
  );
};

export default App;
