import 'rc-progress/assets/index.css';
import React, { Component } from "react";
import { Line, Circle } from 'rc-progress';

export default class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0
    }
    this.increase = this.increase.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 100) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 40);
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({ percent: 50 }, () => {
      this.increase();
    });
  }

  render() {
    return (
      <div>
        <div style={{ margin: 1, width: 40 }}>
          <Circle strokeWidth="4" percent={this.state.percent} gapPosition="left" className="progressCircle" />
          {/* <button onClick={this.restart}>Restart</button> */}
        </div>
      </div>
    );
  }
}
