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
    this.state = { act: null, activeEntityIndex: null };
  }

  async componentDidMount() {
    const act = await Act.load("2022", "0099", "personal-data-protection");
    this.setState({ act });
  }

  onClickEntity(entityIndex) {
    const boxInner = document.getElementById("box-inner");
    boxInner.scrollTop = 0;
    this.setState({ activeEntityIndex: entityIndex });
  }

  onClickIndex() {
    this.setState({ activeEntityIndex: null });
  }

  renderIndex() {
    const { act } = this.state;
    return (
      <Box>
        <ActPreContentView act={act} />
        <ActIndexView act={act} onClick={this.onClickEntity.bind(this)} />
      </Box>
    );
  }

  renderEntity() {
    const { act, activeEntityIndex } = this.state;
    const activeEntity = act.indexEntities[activeEntityIndex];
    return <ActEntityView entity={activeEntity} showSubEntities={true} />;
  }

  render() {
    const { act, activeEntityIndex } = this.state;
    if (!act) {
      return <CircularProgress />;
    }

    return (
      <Box>
        <Box sx={STYLE_BOX_HEADER}>
          <ActTitleView act={act} />
        </Box>
        <Box sx={STYLE_BOX_INNER} id="box-inner">
          {activeEntityIndex ? this.renderEntity() : this.renderIndex()}
        </Box>
        <CustomBottomNavigation
          nEntities={act.indexEntities.length}
          activeEntityIndex={activeEntityIndex}
          onClickIndex={this.onClickIndex.bind(this)}
          onClickEntity={this.onClickEntity.bind(this)}
        />
      </Box>
    );
  }
}
