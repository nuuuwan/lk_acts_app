import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ActEntityStyles from "../../view/molecules/ActEntityStyles";
import LinesView from "../../view/molecules/LinesView";
import ShowHide from "../../view/organisms/ShowHide";

const STYLE_MARGINAL_NOTE = {
  color: "orange",
};

const STYLE_SUBTITLE = {
  color: "gray",
  marginLeft: 1,
};

export default function ActEntityView({ entity }) {
  const sx = ActEntityStyles.getStyle(entity);
  const show = !(
    entity.entityTypeName === "L0Part" || entity.entityTypeName === "L0Schedule"
  );

  return (
    <Box sx={sx}>
      <ShowHide
        show={show}
        contentBase={
          <Box>
          {entity.supertitle ? (
            <Typography variant="caption" sx={STYLE_SUBTITLE}>
              {entity.supertitle}
            </Typography>
          ) : null}
            <LinesView lines={entity.textLinesSmart} sx={sx} />
            {entity.subtitle ? (
              <Typography variant="caption" sx={STYLE_SUBTITLE}>
                {entity.subtitle}
              </Typography>
            ) : null}
          </Box>
        }
        contentShow={
          <Box>
            {entity.subEntities.map(function (subEntity, iSubEntity) {
              return (
                <ActEntityView key={iSubEntity} entity={subEntity} />
              );
            })}
          </Box>
        }
      />
    </Box>
  );
}
