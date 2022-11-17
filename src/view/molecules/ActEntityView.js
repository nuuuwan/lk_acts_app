import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ActEntityStyles from "../../view/molecules/ActEntityStyles";
import LinesView from "../../view/molecules/LinesView";

const STYLE_BOX = {
  margin: 1,
  padding: 1,
  background: "rgba(0,0,0,0.02)",
  borderRadius: "12px",
};

export default function ActEntityView({ entity }) {
  const sx = ActEntityStyles.getStyle(entity);

  return (
    <Box sx={STYLE_BOX}>
      {entity.marginalNote ? (
        <Typography variant="caption">{entity.marginalNote}</Typography>
      ) : null}
      <LinesView lines={entity.textLines} sx={sx} />
      {entity.subEntities.map(function (subEntity, iSubEntity) {
        return <ActEntityView key={iSubEntity} entity={subEntity} />;
      })}
    </Box>
  );
}
