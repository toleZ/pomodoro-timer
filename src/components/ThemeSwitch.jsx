import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack position={"absolute"} bottom={0} right={0} m={2}>
      <FaSun />
      <Switch
        onChange={toggleColorMode}
        defaultChecked={colorMode === "light"}
        colorScheme="none"
      />
      <FaMoon />
    </HStack>
  );
};

export default ThemeSwitch;
