/** @format */

import React from "react";
import * as d3 from "d3";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount(state) {}
  render(props) {
    let { width, height } = this.props;

    return (
      <svg
        className="container"
        width={width}
        height={height}
        Links={this.Links}
        Nodes={this.Nodes}>
        {this.Nodes.Map(Nodes)}
        {this.Links.Map(Links)}
      </svg>
    );
  }
}
export default Chart;
