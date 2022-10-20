import {
  Button,
  ButtonGroup,
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { VscDebugRestart, VscDebugContinue } from "react-icons/vsc";
import SettingsModal from "./SettingsModal";

const Timer = ({ initialMM = 0, initialSS = 0, tabIndex }) => {
  const [settings, setSettings] = useState({ mm: initialMM, ss: initialSS });
  const [mm, setMM] = useState(settings.mm);
  const [ss, setSS] = useState(settings.ss);
  const [run, setRun] = useState(false);

  const calcProgress = () => {
    const initial = settings.mm * 60 + settings.ss;
    const cur = mm * 60 + ss;
    const progress = 100 - (cur * 100) / initial;

    return progress;
  };

  const resetTimer = () => {
    setRun(false);
    setMM(settings.mm);
    setSS(settings.ss);
  };

  useEffect(() => {
    let interval;

    if (!run || (mm === 0 && ss === 0)) {
      clearInterval(interval);
      setRun(false);
    } else if (run) {
      interval = setInterval(() => {
        ss === 0 ? (setMM(mm - 1), setSS(59)) : setSS(ss - 1);
      }, 1000);
    }

    return () => {
      calcProgress();
      clearInterval(interval);
    };
  }, [run, mm, ss]);

  useEffect(() => {
    resetTimer();
  }, [tabIndex, settings]);

  return (
    <VStack>
      <CircularProgress value={calcProgress()} size="md">
        <CircularProgressLabel fontSize="6xl">
          {String(mm).padStart(2, "0")}:{String(ss).padStart(2, "0")}
        </CircularProgressLabel>
      </CircularProgress>
      <ButtonGroup variant={"outline"} colorScheme="blue">
        <Button
          onClick={() => setRun(!run)}
          colorScheme={run ? "red" : "green"}
        >
          {run ? "STOP" : "RUN"}
          <VscDebugContinue />
        </Button>
        <IconButton onClick={resetTimer} icon={<VscDebugRestart />} />
        <SettingsModal setSettings={setSettings} />
      </ButtonGroup>
    </VStack>
  );
};

export default Timer;
