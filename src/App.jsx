import { Center, Link, Text } from "@chakra-ui/react";
import ThemeSwitch from "./components/ThemeSwitch";
import TimerTabs from "./components/TimerTabs";

const App = () => {
  return (
    <Center minH="100vh">
      <TimerTabs />
      <ThemeSwitch />
      <Text position={"absolute"} bottom={0} m={2}>
        Designed by{" "}
        <Link href="https://github.com/toleZ" color={"orange"}>
          'toleZ'
        </Link>{" "}
        - Front End Junior Developer 🧑‍💻
      </Text>
    </Center>
  );
};

export default App;
