import React, { Component } from "react";
import ReactDOM from "react-dom";

import WordCounter from "./components/WordCounter";

import style from "./main.css"

class App extends Component {

  render() {
    return (
      <h1>Hello World</h1>
      <WordCounter targetWordCount={20} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
