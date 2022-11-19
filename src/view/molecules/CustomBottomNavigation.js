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

  const disablePreviousButton = !activeEntityIndex || activeEntityIndex === 0;
  const onClickPrevious = function () {
    onClickEntity(activeEntityIndex - 1);
  };

  const disableNextButton =
    activeEntityIndex && activeEntityIndex === nEntities - 1;
  const onClickNext = function () {
    onClickEntity(activeEntityIndex + 1);
  };

  const styleButton = function (disabled) {
    return { opacity: disabled ? 0.2 : 1, color: "white" };
  };

  return (
    <BottomNavigation sx={STYLE}>
      <BottomNavigationAction
        icon={<SkipPreviousIcon />}
        onClick={onClickPrevious}
        disabled={disableIndexButton}
        sx={styleButton(disableIndexButton)}
      />
      <BottomNavigationAction
        icon={<MenuIcon />}
        onClick={onClickIndexInner}
        disabled={disablePreviousButton}
        sx={styleButton(disablePreviousButton)}
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
