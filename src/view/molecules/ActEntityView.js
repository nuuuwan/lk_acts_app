import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ActEntityStyles from "../../view/molecules/ActEntityStyles";
import LinesView from "../../view/molecules/LinesView";
import ShowHide from "../../view/organisms/ShowHide";

const STYLE_MARGINAL_NOTE = {
  color: "orange",
};

export default function ActEntityView({ entity }) {
  const sx = ActEntityStyles.getStyle(entity);
  const show = !(
    entity.entityTypeName === "L0Part" || entity.entityTypeName === "L0Schedule"
  );

  return (
    <Box>
      <Grid container>
        <Grid item sx={{ width: "85%" }}>
          <Box sx={sx}>
            <ShowHide
              show={show}
              contentBase={<LinesView lines={entity.textLinesSmart} sx={sx} />}
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
        </Grid>
        <Grid item sx={{ width: "15%" }}>
          {entity.marginalNote ? (
            <Typography variant="caption" sx={STYLE_MARGINAL_NOTE}>
              {entity.marginalNote}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}
