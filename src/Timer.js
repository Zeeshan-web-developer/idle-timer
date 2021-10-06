import React, { useRef } from "react";
import IdleTimer from "react-idle-timer";

const Timer = () => {
  const idleTimer = useRef(null);
  // function handleOnAction(event) {
  //   console.log("user did something", event);
  // }

  // function handleOnActive(event) {
  //   console.log("user is active", event);
  //   console.log("time remaining", this.idleTimer.getRemainingTime());
  // }

  function handleOnIdle(event) {
    console.log("idle");
  }
  return (
    <>
      <IdleTimer
        ref={idleTimer}
        timeout={5000}
        //onActive={handleOnActive}
        onIdle={handleOnIdle}
        //onAction={handleOnAction}
        // debounce={250}
      />
    </>
  );
};
export default Timer;
