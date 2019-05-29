import React, {Component} from 'react';
import RangeSlider from '../components/RangeSlider';
import PlayPauseButtons from '../components/PlayPauseButtons';

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
    let obj = {}
    obj[newValue.target.bpm] = newValue.target.value;
    this.setState(obj);
    const nIntervId = setInterval(this.changeBPM(newValue), (newValue * 6));
  }

  render() {
    return (
      <div>
        <h2>Metronome</h2>
        <h5>{this.state.bpm}BPM</h5>
        <PlayPauseButtons/>
        <RangeSlider
        onChange={(newValue) => {this.handleBPMchange(newValue)}}
        value={this.state.bpm}
        />
      </div>
    )
  }
}

export default MetronomeContainer;
