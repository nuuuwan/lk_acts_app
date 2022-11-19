import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListIcon from "@mui/icons-material/List";

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 48,
};

export default function CustomBottomNavigation({ onClickIndex }) {
  const onClickIndexInner = function () {
    onClickIndex();
  };

  return (
    <BottomNavigation sx={STYLE}>
      <BottomNavigationAction icon={<ListIcon />} onClick={onClickIndexInner} />
    </BottomNavigation>
  );
}
