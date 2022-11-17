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
      <Stack direction="row" alignItems="top">
        <Box>
          <Box>{contentBase}</Box>
          {contentShow ? (
            show ? (
              <>
                {contentShow}
                <IconButton onClick={this.onClick.bind(this)} size="small">
                  <ExpandLessIcon />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={this.onClick.bind(this)} size="small">
                <ExpandMoreIcon />
              </IconButton>
            )
          ) : null}
        </Box>
      </Stack>
    );
  }
}
