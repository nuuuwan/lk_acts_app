import { Component } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Stack direction="row">
        <Box>
          <Box>{contentBase}</Box>
          {show ? contentShow : null}
        </Box>
        <IconButton
          onClick={this.onClick.bind(this)}
          size="small"
          sx={{ height: 32 }}
        >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Stack>
    );
  }
}
