import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LinesView from "../../view/molecules/LinesView";
import ShowHide from "../../view/organisms/ShowHide";

const STYLE_PRE_CONTENT = {
  fontSize: "70%",
  color: "gray",
};

export default function ActPreContentView({ act }) {
  return (
    <Box>
      <ShowHide
        contentBase={
          <Typography variant="body2" sx={STYLE_PRE_CONTENT}>
            Long Title
          </Typography>
        }
        contentShow={
          <LinesView lines={act.longTitleLines} sx={STYLE_PRE_CONTENT} />
        }
      />
      <ShowHide
        contentBase={
          <Typography variant="body2" sx={STYLE_PRE_CONTENT}>
            Presented by
          </Typography>
        }
        contentShow={
          <LinesView lines={act.presentedByLines} sx={STYLE_PRE_CONTENT} />
        }
      />
      <ShowHide
        contentBase={
          <Typography variant="body2" sx={STYLE_PRE_CONTENT}>
            Preamble
          </Typography>
        }
        contentShow={
          <LinesView lines={act.preambleLines} sx={STYLE_PRE_CONTENT} />
        }
      />
    </Box>
  );
}
