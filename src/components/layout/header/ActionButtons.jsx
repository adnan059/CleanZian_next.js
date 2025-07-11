import ModeToggle from "@/components/shared/modeToggle/ModeToggle";
import React from "react";

const ActionButtons = () => {
  return (
    <div className="headerActionButtons">
      <button>Get A Queue</button>
      <ModeToggle />
    </div>
  );
};

export default ActionButtons;
