import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ActEntityView from "../../view/molecules/ActEntityView";

const STYLE = { margin: 0, padding: 0 };
export default function ActIndexView({ act, onClick }) {
  return (
    <List sx={STYLE}>
      {act.parts.map(function (part, iPart) {
        const onClickInner = function () {
          onClick(part);
        };
        return (
          <ListItem key={"part-" + iPart} sx={STYLE}>
            <ListItemButton onClick={onClickInner}>
              <ActEntityView
                key={"part-" + iPart}
                entity={part}
                showSubEntities={false}
              />
            </ListItemButton>
          </ListItem>
        );
      })}

      {act.schedules.map(function (schedule, iSchedule) {
        const onClickInner = function () {
          onClick(schedule);
        };
        return (
          <ListItem key={"schedule-" + iSchedule} sx={STYLE}>
            <ListItemButton onClick={onClickInner}>
              <ActEntityView entity={schedule} showSubEntities={false} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
