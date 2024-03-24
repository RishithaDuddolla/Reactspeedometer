import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    console.log(speed)
    if (speed < 200) {
      this.setState(prevspeed => ({speed: prevspeed.speed + 10}))
    } else {
      this.setState(prevspeed => ({speed: prevspeed.speed}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    console.log(speed)
    if (speed > 0) {
      this.setState(prevspeed => ({speed: prevspeed.speed - 10}))
    } else {
      this.setState(prevspeed => ({speed: prevspeed.speed}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    console.log(speed)
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1 className="h1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="img-css"
        />
        <h1 className="h3">Speed is {speed}mph</h1>
        <p className="p">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className=" btn btn1"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className=" btn btn2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
