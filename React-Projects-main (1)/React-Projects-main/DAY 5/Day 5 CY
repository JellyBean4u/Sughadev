import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    // Set up the interval to update the time every second
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>Current Time</h1>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
