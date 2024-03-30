import Box from "@mui/material/Box";
import Settings from "./Settings";
import Play from "./Play";
import Next from "./Next";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [startTimer, setStartTimer] = useState(false);

  //the input in useState was TIME_SECONDS via part 1 section 4 of the tutorial, not sure what to put for this because
  //that seems like a constant and was not defined, same issue below in comments
  const [time, setNewTime] = useState(false); 

  /*

  PART 1 SECTION 5 OF TUTORIAL: SAYS 3 ERRORS ARE 'STATE FLOW' is not defined

  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [state, setState] = useState(STATE_FLOW[currentFlowIndex]); 

 const handleSetState = () => {
    setCurrentFlowIndex(currentFlowIndex + 1);
    currentFlowIndex === STATE_FLOW.length - 1 && setCurrentFlowIndex(0);

    setState(STATE_FLOW[currentFlowIndex]);
  };

  */

  

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  useEffect(() => {
    if (startTimer) {
      const interval = setTimeout(() => {
        time > 0 && setNewTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, startTimer]);

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Box>Focus</Box>
      <Box fontSize={"256px"}>05:00</Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Settings>Settings</Settings>
        <Play>Play</Play>
        <Next>Next Button</Next>
      </Box>
    </Box>
  );
};

export default Timer;