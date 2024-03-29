import ReactDOM from 'react-dom';
import './index.css';
import React, {Component} from 'react';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class StopwatchTime extends Component {
    render() {
      return (
        <div style={{marginLeft:500}}>
          <h3>How much time?</h3>
          <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
        </div>
      );
    }
  }
   
  class Stopwatch extends Component {
    render() {
      return (
        <div>
          <h1 style={{ fontSize: 125, marginLeft:470 }}>{this.props.value}:{this.props.seconds}</h1>
        </div>
      );
    }
  }
   
  class Start extends Component {
    render() {
      return (
        <div style={{ marginLeft: 540 }}>
          <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
        </div>
   
      );
    }
  }


  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: '00',
        value: '',
        isClicked : false
      }
    //   this.secondsRemaining;
    //   this.intervalHandle;
      this.handleChange = this.handleChange.bind(this);
      this.startCountDown = this.startCountDown.bind(this);
      this.tick = this.tick.bind(this);
    }
   
    handleChange(event) {
      this.setState({
        value: event.target.value
      })
    }
   
    tick() {
      var min = Math.floor(this.secondsRemaining / 60);
      var sec = this.secondsRemaining - (min * 60);
   
      this.setState({
        value: min,
        seconds: sec,
      })
   
      if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds,
        })
   
      }
   
      if (min < 10) {
        this.setState({
          value: "0" + min,
        })
   
      }
   
      if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
      }
   
   
      this.secondsRemaining--
    }
   
    startCountDown() {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.value;
      this.secondsRemaining = time * 60;
      this.setState({
        isClicked : true
      })
    }
   
    render() {
      const clicked = this.state.isClicked;
      if(clicked){
      return (
        <div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Stopwatch value={this.state.value} seconds={this.state.seconds} />
             
            </div>
          </div>
        </div>
      );
      }else{
        return (
          <div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <StopwatchTime value={this.state.value} handleChange={this.handleChange} />
                <Stopwatch value={this.state.value} seconds={this.state.seconds} />
                <Start startCountDown={this.startCountDown} value={this.state.value} />
              </div>
            </div>
          </div>
        );
      }
    }
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  