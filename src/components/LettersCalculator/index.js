import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeValue = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="con-1">
          <h1 className="header">Calculate the letters you enter</h1>
          <label htmlFor="input" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onChangeValue}
            id="input"
          />
          <p className="letters">No.of letters: {count}</p>
        </div>
        <div className="con-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
