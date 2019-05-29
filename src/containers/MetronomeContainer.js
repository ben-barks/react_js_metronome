import React, {Component} from 'react';
import RangeSlider from '../components/RangeSlider';

class MetronomeContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bpm: 100
    }
    this.handleBPMchange = this.handleBPMchange.bind(this);
  }

  changeBPM(newValue){
    this.state.bpm = newValue;
  }

  handleBPMchange(newValue){
    const nIntervId = setInterval(this.changeBPM(newValue), 6);
  }

  render() {
    return (
      <div>
        <h2>Metronome</h2>
        <h5>{this.state.bpm}BPM</h5>
        <RangeSlider handleBPMchange={this.handleBPMchange}/>
      </div>
    )
  }
}

export default MetronomeContainer;
