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
      <Box>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Box>{contentBase}</Box>
          <Box>
            <IconButton
              onClick={this.onClick.bind(this)}
              size="small"
              sx={{ height: 32 }}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </Stack>
        {show ? contentShow : null}
      </Box>
    );
  }
}
