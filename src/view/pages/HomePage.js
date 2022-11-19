import { Component } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Act from "../../nonview/core/Act";

import ActEntityView from "../../view/molecules/ActEntityView";
import ActIndexView from "../../view/molecules/ActIndexView";
import ActPreContentView from "../../view/molecules/ActPreContentView";
import ActTitleView from "../../view/molecules/ActTitleView";
import CustomBottomNavigation from "../../view/molecules/CustomBottomNavigation";

const STYLE_BOX_HEADER = {
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  height: 36,
  overflow: "scroll",
  padding: 1,
  background: "black",
  color: "white",
  zIndex: 1000,
};

const STYLE_BOX_INNER = {
  position: "fixed",
  bottom: 48,
  left: 0,
  right: 0,
  top: 36,
  overflow: "scroll",
  padding: 3,
  zIndex: 500,
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { act: null, activeEntity: null };
  }

  async componentDidMount() {
    const act = await Act.load("2022", "0099", "personal-data-protection");
    this.setState({ act });
  }

  onClickEntity(entity) {
    const boxInner = document.getElementById("box-inner");
    boxInner.scrollTop = 0;

    this.setState({ activeEntity: entity });
  }

  onClickIndex() {
    this.setState({ activeEntity: null });
  }

  renderInner() {
    const { act, activeEntity } = this.state;
    if (activeEntity) {
      return <ActEntityView entity={activeEntity} showSubEntities={true} />;
    } else {
      return (
        <Box>
          <ActPreContentView act={act} />
          <ActIndexView act={act} onClick={this.onClickEntity.bind(this)} />
        </Box>
      );
    }
  }

  render() {
    const { act } = this.state;
    if (!act) {
      return <CircularProgress />;
    }

    return (
      <Box>
        <Box sx={STYLE_BOX_HEADER}>
          <ActTitleView act={act} />
        </Box>
        <Box sx={STYLE_BOX_INNER} id="box-inner">
          {this.renderInner()}
        </Box>
        <CustomBottomNavigation onClickIndex={this.onClickIndex.bind(this)} />
      </Box>
    );
  }
}
