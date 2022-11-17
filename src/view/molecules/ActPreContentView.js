import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LinesView from "../../view/molecules/LinesView";
import ShowHide from "../../view/organisms/ShowHide";

const STYLE_PRESENTED_BY = {
  fontSize: "70%",
};

const STYLE_PREAMBLE = {
  fontSize: "100%",
  color: "maroon",
};

const STYLE_LONG_TITLE = {
  fontSize: "100%",
  color: "orange",
};

export default function ActPreContentView({ act }) {
  return (
    <Box>
      <ShowHide
        contentBase={<Typography variante="h6">Long Title</Typography>}
        contentShow={
          <LinesView lines={act.longTitleLines} sx={STYLE_LONG_TITLE} />
        }
      />
      <ShowHide
        contentBase={<Typography variante="h6">Presented by</Typography>}
        contentShow={
          <LinesView lines={act.presentedByLines} sx={STYLE_PRESENTED_BY} />
        }
      />
      <ShowHide
        contentBase={<Typography variante="h6">Preamble</Typography>}
        contentShow={
          <LinesView lines={act.preambleLines} sx={STYLE_PREAMBLE} />
        }
      />
    </Box>
  );
}
