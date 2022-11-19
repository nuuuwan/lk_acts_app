import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 72,
  background: "black",
};

export default function CustomBottomNavigation({
  activeEntityIndex,
  nEntities,
  onClickIndex,
  onClickEntity,
}) {
  const disableIndexButton = activeEntityIndex === null;
  const onClickIndexInner = function () {
    onClickIndex();
  };

  const disablePreviousButton = activeEntityIndex === null;
  const onClickPrevious = function () {
    if (activeEntityIndex === 0) {
      onClickIndex();
    } else {
      onClickEntity(activeEntityIndex - 1);
    }
  };

  const disableNextButton =
    activeEntityIndex !== null && activeEntityIndex === nEntities - 1;
  const onClickNext = function () {
    if (activeEntityIndex === null) {
      onClickEntity(0);
    } else {
      onClickEntity(activeEntityIndex + 1);
    }
  };

  const styleButton = function (disabled) {
    return { opacity: disabled ? 0.2 : 1, color: "white" };
  };

  return (
    <BottomNavigation sx={STYLE}>
      <BottomNavigationAction
        icon={<SkipPreviousIcon />}
        onClick={onClickPrevious}
        disabled={disablePreviousButton}
        sx={styleButton(disablePreviousButton)}
      />
      <BottomNavigationAction
        icon={<MenuIcon />}
        onClick={onClickIndexInner}
        disabled={disableIndexButton}
        sx={styleButton(disableIndexButton)}
      />
      <BottomNavigationAction
        icon={<SkipNextIcon />}
        onClick={onClickNext}
        disabled={disableNextButton}
        sx={styleButton(disableNextButton)}
      />
    </BottomNavigation>
  );
}
