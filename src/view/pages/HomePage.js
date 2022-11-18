import { Component } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Act from "../../nonview/core/Act";

import ActEntityView from "../../view/molecules/ActEntityView";
import ActIndexView from "../../view/molecules/ActIndexView";
import CustomBottomNavigation from "../../view/molecules/CustomBottomNavigation";

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
    console.debug("onClickEntity", entity);
    this.setState({ activeEntity: entity });
  }

  onClickIndex() {
    this.setState({ activeEntity: null });
  }

  renderInner() {
    const { act, activeEntity } = this.state;
    if (!act) {
      return <CircularProgress />;
    }
    if (activeEntity) {
      return <ActEntityView entity={activeEntity} showSubEntities={true} />;
    } else {
      return <ActIndexView act={act} onClick={this.onClickEntity.bind(this)} />;
    }
  }

  render() {
    return (
      <Box>
        {this.renderInner()}
        <CustomBottomNavigation onClickIndex={this.onClickIndex.bind(this)} />
      </Box>
    );
  }
}
