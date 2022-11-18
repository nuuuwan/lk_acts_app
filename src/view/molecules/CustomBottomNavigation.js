import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListIcon from "@mui/icons-material/List";

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 72,
};

const URL_APP = "https://nuuuwan.github.io/lk_acts_app/";

export default function CustomBottomNavigation({ onClickIndex }) {
  const onClickIndexInner = function () {
    localStorage.clear();
    window.location.reload();
    navigator.clipboard.writeText(URL_APP);
    onClickIndex();
  };

  return (
    <BottomNavigation sx={STYLE}>
      <BottomNavigationAction icon={<ListIcon />} onClick={onClickIndexInner} />
    </BottomNavigation>
  );
}
