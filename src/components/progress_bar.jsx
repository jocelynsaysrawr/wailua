import 'rc-progress/assets/index.css';
import React, { Component } from "react";
import { Line, Circle } from 'rc-progress';

export default class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      number: 0
    }
    this.increase = this.increase.bind(this);
    this.increaseProgressNumber = this.increaseProgressNumber.bind(this);
  }

  componentDidMount() {
    // this.increase();
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

  //If user accumulates points set this function off to increase level
  increaseProgressNumber() {
    clearTimeout(this.tm);
    this.setState({ percent: 1 }, () => {
      this.increase();
    });
  }

  render() {
    return (
      <div>
        <div className="progressNumber">
          {this.state.percent}
        </div>
        <div style={{ margin: -3, width: 40 }}>
          <Circle
            className="progressCircle"
            strokeWidth="4"
            percent={this.state.percent}
            gapPosition="left"
          />
          <button onClick={this.increaseProgressNumber}>Level Me Up!</button>
        </div>
      </div>
    );
  }
}
