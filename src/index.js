import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import WordCounter from './components/WordCounter'

import style from './main.css'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <WordCounter targetWordCount={20} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
