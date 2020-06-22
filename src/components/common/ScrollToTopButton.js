import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

function ScrollToTopButton() {
  return (
    <div>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={200}
        AnimationDuration={500}
        style={{ outline: "none" }}
      />
    </div>
  );
}

export default ScrollToTopButton;
