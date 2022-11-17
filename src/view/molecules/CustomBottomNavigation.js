import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RefreshIcon from '@mui/icons-material/Refresh';

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 72,
}

export default function CustomBottomNavigation() {
  const onClickRefresh = function() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <BottomNavigation sx={STYLE}>
      <BottomNavigationAction
        icon={<RefreshIcon />}
        onClick={onClickRefresh}
      />
    </BottomNavigation>
  );
}
