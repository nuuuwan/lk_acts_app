import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ActEntityView from "../../view/molecules/ActEntityView";

const STYLE = { margin: 0, padding: 0 };
export default function ActIndexView({ act, onClick }) {
  return (
    <List sx={STYLE}>
      {act.indexEntities.map(function (entity, entityIndex) {
        const onClickInner = function () {
          onClick(entityIndex);
        };
        return (
          <ListItem key={"entity-" + entityIndex} sx={STYLE}>
            <ListItemButton onClick={onClickInner}>
              <ActEntityView entity={entity} showSubEntities={false} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
