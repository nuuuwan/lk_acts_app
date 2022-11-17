import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ActEntityView from "../../view/molecules/ActEntityView";
import ActPreContentView from "../../view/molecules/ActPreContentView";
import ActTitleView from "../../view/molecules/ActTitleView";

const STYLE = {
  padding: 1,
  maxWidth: 800,
  margin: "auto",
};

export default function ActView({ act }) {
  return (
    <Box sx={STYLE}>
      <ActTitleView act={act} />
      <ActPreContentView act={act} />
      <Typography variant="h6">Parts</Typography>
      {act.parts.map(function (part, iPart) {
        return <ActEntityView key={"part-" + iPart} entity={part} />;
      })}
      <Typography variant="h6">Schedules</Typography>
      {act.schedules.map(function (schedule, iSchedule) {
        return (
          <ActEntityView key={"schedule-" + iSchedule} entity={schedule} />
        );
      })}
    </Box>
  );
}
