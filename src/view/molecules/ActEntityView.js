import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ActEntityStyles from "../../view/molecules/ActEntityStyles";
import LinesView from "../../view/molecules/LinesView";

const STYLE_SUBTITLE = {
  color: "gray",
};

export default function ActEntityView({ entity, showSubEntities, onClick }) {
  const sx = ActEntityStyles.getStyle(entity);

  const contentBase = (
    <Box onClick={onClick}>
      {entity.supertitle ? (
        <Typography variant="caption" sx={STYLE_SUBTITLE}>
          {entity.supertitle}
        </Typography>
      ) : null}
      <LinesView lines={entity.textLinesSmart} sx={{ color: sx.color }} />
      {entity.subtitle ? (
        <Typography variant="caption" sx={STYLE_SUBTITLE}>
          {entity.subtitle}
        </Typography>
      ) : null}
    </Box>
  );

  const contentShow = showSubEntities ? (
    <Box>
      {entity.subEntities.map(function (subEntity, iSubEntity) {
        return (
          <ActEntityView
            key={iSubEntity}
            entity={subEntity}
            showSubEntities={true}
          />
        );
      })}
    </Box>
  ) : null;

  return (
    <Box sx={sx}>
      {contentBase}
      {contentShow}
    </Box>
  );
}
