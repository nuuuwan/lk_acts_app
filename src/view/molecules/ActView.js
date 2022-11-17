import Box from "@mui/material/Box";

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
      {act.parts.map(function (part, iPart) {
        return <ActEntityView key={"part-" + iPart} entity={part} />;
      })}
      {act.schedules.map(function (schedule, iSchedule) {
        return (
          <ActEntityView key={"schedule-" + iSchedule} entity={schedule} />
        );
      })}
    </Box>
  );
}
