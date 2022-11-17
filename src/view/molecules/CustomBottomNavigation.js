import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RefreshIcon from "@mui/icons-material/Refresh";

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 72,
};

const URL_APP = "https://nuuuwan.github.io/lk_acts_app/";

export default function CustomBottomNavigation() {
  const onClickRefresh = function () {
    localStorage.clear();
    window.location.reload();
  };

  const onClickCopyLink = function () {
    navigator.clipboard.writeText(URL_APP);
  };
  return (
    <BottomNavigation sx={STYLE}>
      <BottomNavigationAction icon={<RefreshIcon />} onClick={onClickRefresh} />
      <BottomNavigationAction
        icon={<ContentCopyIcon />}
        onClick={onClickCopyLink}
      />
    </BottomNavigation>
  );
}
