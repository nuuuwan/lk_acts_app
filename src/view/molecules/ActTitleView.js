import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ActTitleView({ act }) {
  return (
    <Box>
      <Typography variant="body1">
        The Democratic Socialist Republic of Sri Lanka
      </Typography>
      <Typography variant="h4">{act.shortTitle}</Typography>
      <Typography variant="h6">
        Act No. {act.num} of {act.year}
      </Typography>
    </Box>
  );
}
