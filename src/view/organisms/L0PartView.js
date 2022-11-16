import { Component } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import L1SectionView from "../../view/molecules/L1SectionView";
import LinesView from "../../view/molecules/LinesView";

const STYLE = {
  color: "black",
  fontSize: "100%",
  fontWeight: "bold",
  background: "#fcfcfc",
  borderRadius: "12px",
};

export default class L0PartView extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  async componentDidMount() {}

  renderExpanded() {
    const { part } = this.props;
    const onClick = function () {
      this.setState({ expanded: false });
    }.bind(this);

    return (
      <>
        <IconButton onClick={onClick}>
          <VisibilityOffIcon />
        </IconButton>
        {part.sections.map(function (section, iSection) {
          return (
            <>
              <L1SectionView key={"section-" + iSection} section={section} />
            </>
          );
        })}
      </>
    );
  }

  renderCommon() {
    const { part } = this.props;
    const onClick = function () {
      this.setState({ expanded: true });
    }.bind(this);

    const textlines =
      part.textlines.length > 0 ? part.textlines : ["PART 0 (Introduction)"];
    return (
      <Box onClick={onClick}>
        <LinesView lines={textlines} sx={STYLE} />
      </Box>
    );
  }

  render() {
    const { expanded } = this.state;
    return (
      <Box sx={STYLE}>
        {this.renderCommon()}
        {expanded ? this.renderExpanded() : null}
      </Box>
    );
  }
}
