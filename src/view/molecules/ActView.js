import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import L0PartView from "../../view/organisms/L0PartView";
import L0ScheduleView from "../../view/organisms/L0ScheduleView";
import LinesView from "../../view/molecules/LinesView";

const STYLE = {
  padding: 1,
  maxWidth: 800,
  margin: "auto",
};

const STYLE_LONG_TITLE = {
  fontSize: "100%",
  color: "orange",
};

const STYLE_PRESENTED_BY = {
  fontSize: "70%",
};

const STYLE_PREAMBLE = {
  fontSize: "100%",
  color: "maroon",
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
      <LinesView lines={act.longTitleLines} sx={STYLE_LONG_TITLE} />
      <LinesView lines={act.presentedByLines} sx={STYLE_PRESENTED_BY} />
      <LinesView lines={act.preambleLines} sx={STYLE_PREAMBLE} />

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
