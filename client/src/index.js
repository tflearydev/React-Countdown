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
   
  