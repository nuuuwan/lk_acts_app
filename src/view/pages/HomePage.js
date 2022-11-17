import { Component } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Act from "../../nonview/core/Act";

import ActView from "../../view/molecules/ActView";
import CustomBottomNavigation from "../../view/molecules/CustomBottomNavigation";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { act: null };
  }

  async componentDidMount() {
    const act = await Act.load("2022", "0099", "personal-data-protection");
    this.setState({ act });
  }

  renderInner() {
    const { act } = this.state;
    if (!act) {
      return <CircularProgress />;
    }

    return <ActView act={act} />;
  }

  render() {
    return (
      <Box>
        {this.renderInner()}
        <CustomBottomNavigation />
      </Box>
    );
  }
}
