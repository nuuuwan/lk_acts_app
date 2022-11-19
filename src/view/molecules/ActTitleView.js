import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LineView from "../../view/molecules/LineView";

function onClickAvatar() {
  localStorage.clear();
  window.location.reload();
}

export default function ActTitleView({ act }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Logo"
        src={`${process.env.PUBLIC_URL}/logo512.png`}
        sx={{ height: 32, width: 32 }}
        onClick={onClickAvatar}
      />
      <Box>
        <LineView line={act.shortTitle} sx={{ fontSize: "75%" }} />
        <Typography sx={{ fontSize: "50%" }}>
          Act No. {act.num} of {act.year}
        </Typography>
      </Box>
    </Stack>
  );
}
