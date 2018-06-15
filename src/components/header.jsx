import 'rc-progress/assets/index.css';
import React, { Component } from "react";
import { Circle } from 'rc-progress';

export default class AppHeader extends Component {
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
        <h1>Header</h1>
        <div className="progressCircle" style={{ margin: 10, width: 50 }}>
          <Circle strokeWidth="6" percent={this.state.percent} />
          <button onClick={this.restart}>Restart</button>
        </div>
      </div>
    );
  }
}
