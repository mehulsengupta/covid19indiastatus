import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

function ScrollToTopButton() {
  return (
    <div>
      <ScrollUpButton
        StopPosition={150}
        ShowAtPosition={200}
        AnimationDuration={500}
      />
    </div>
  );
}

export default ScrollToTopButton;
