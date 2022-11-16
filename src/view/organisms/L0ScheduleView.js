import { Component } from "react";

import Box from "@mui/material/Box";

import L1SectionView from "../../view/molecules/L1SectionView";
import LinesView from "../../view/molecules/LinesView";

const STYLE = {
  color: "black",
  fontSize: "100%",
  fontWeight: "bold",
};

export default class L0ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  async componentDidMount() {}

  renderExpanded() {
    const { schedule } = this.props;
    return schedule.sections.map(function (section, iSection) {
      return <L1SectionView key={"section-" + iSection} section={section} />;
    });
  }

  render() {
    const { schedule } = this.props;
    const { expanded } = this.state;
    return (
      <Box>
        <LinesView lines={schedule.textlines} sx={STYLE} />
        {expanded ? this.renderExpanded() : null}
      </Box>
    );
  }
}
