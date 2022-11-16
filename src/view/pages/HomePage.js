import { Component } from "react";

import Act from "../../nonview/core/Act";

import ActView from "../../view/molecules/ActView";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { act: null };
  }

  async componentDidMount() {
    const act = await Act.load("2022", "0009", "personal-data-protection");
    this.setState({ act });
  }

  render() {
    const { act } = this.state;
    if (!act) {
      return "Loading...";
    }

    return <ActView act={act} />;
  }
}
