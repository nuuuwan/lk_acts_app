import { Component } from "react";

import Box from "@mui/material/Box";

export default class ShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = { show: props.show };
  }

  onClick(event) {
    event.stopPropagation();
    let { show } = this.state;
    show = !show;
    this.setState({ show });
  }

  render() {
    const { show } = this.state;
    const { contentBase, contentShow } = this.props;

    return (
      <Box onClick={this.onClick.bind(this)}>
        <Box>{contentBase}</Box>
        {show ? contentShow : null}
      </Box>
    );
  }
}
