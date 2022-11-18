import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LineView from "../../view/molecules/LineView";

export default function ActTitleView({ act }) {
  return (
    <Box>
      <LineView line={act.shortTitle} sx={{ fontSize: "75%" }} />
      <Typography sx={{ fontSize: "50%" }}>
        Act No. {act.num} of {act.year}
      </Typography>
    </Box>
  );
}
