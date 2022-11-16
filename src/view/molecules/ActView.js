import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import L0PartView from "../../view/molecules/L0PartView";
import L0ScheduleView from "../../view/molecules/L0ScheduleView";
import LinesView from "../../view/molecules/LinesView";

const STYLE = {
  padding: 1,
  maxWidth: 800,
  margin: "auto",
};

export default function ActView({ act }) {
  return (
    <Box sx={STYLE}>
      <Typography variant="body1">
        The Democratic Socialist Republic of Sri Lanka
      </Typography>
      <Typography variant="h4">{act.shortTitle}</Typography>
      <Typography variant="h6">
        Act No. {act.num} of {act.year}
      </Typography>
      <LinesView lines={act.longTitleLines} variant="body1" />
      <LinesView lines={act.presentedByLines} variant="body2" />
      <LinesView lines={act.preambleLines} variant="body2" />

      {act.parts.map(function (part, iPart) {
        return <L0PartView key={"part-" + iPart} part={part} />;
      })}
      {act.schedules.map(function (schedule, iSchedule) {
        return (
          <L0ScheduleView key={"schedule-" + iSchedule} schedule={schedule} />
        );
      })}
    </Box>
  );
}
