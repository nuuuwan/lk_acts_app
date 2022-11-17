import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import L2SubSectionView from "../../view/molecules/L2SubSectionView";
import LinesView from "../../view/molecules/LinesView";

const STYLE_BOX = {
  margin: 1,
  padding: 1,
  background: "#f8f8f8",
  borderRadius: "12px",
};

const STYLE = {
  color: "maroon",
  fontSize: "90%",
  fontWeight: "normal",
};

const STYLE_MARGINAL_NOTE = {
  color: "orange",
  fontSize: "70%",
};

export default function L1SectionView({ section }) {
  return (
    <Box sx={STYLE_BOX}>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <LinesView lines={section.textLines} sx={STYLE} />
          {section.subSections.map(function (subSection, iSubSection) {
            return (
              <L2SubSectionView
                key={"subSection-" + iSubSection}
                subSection={subSection}
              />
            );
          })}
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" sx={STYLE_MARGINAL_NOTE}>
            {section.marginalNote}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
