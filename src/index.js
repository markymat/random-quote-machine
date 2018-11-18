import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let quotes = [
  {
    quote: "Roads? Where we're going, we don't need roads.",
    author: "Doc Emmet Brown"
  },
  {
    quote: "I'll be back.",
    author: "T-800"
  },
  {
    quote: "I'm sorry, Dave. I'm afraid I can't do that.",
    author: "HAL2000"
  },
  {
    quote: "Lets rock.",
    author: "Pvt. Vasquez"
  },
  {
    quote: "Every champion was once a contender who refused to give up.",
    author: "Rocky Balboa"
  },
  {
    quote: "There's no place like home.",
    author: "Dorothy Gale"
  },
  {
    quote: "Go ahead. Make my Day.",
    author: "Harry Callahan"
  },
  {
    quote: "Try not. Do or do not. There is no try.",
    author: "Yoda"
  },
]

class Application extends React.Component {
  constructor(props) {
    super(props)
	//drawed state with default number of quote at first time render
    this.state = {
      drawedNumber: 1
    }
    this.drawQuote = this.drawQuote.bind(this);
  }
  //Method to generate new random number from quotes number range
  drawQuote() {
    this.setState({
      drawedNumber: Math.floor(Math.random() * quotes.length)
    })
  }
  render() {
	// selectedQuotes with exact quote selected by random number from drawQuote method
    let selectedQuote = quotes[this.state.drawedNumber]
    return (
      <div clasName="container">
        <h1>{selectedQuote.quote}</h1>
        <p>{selectedQuote.author}
        </p>
        <button className='buttonf' onClick={this.drawQuote}>Pick another quote</button>
      </div>
    )
  }
}
ReactDOM.render(<Application />, document.getElementById('app'));