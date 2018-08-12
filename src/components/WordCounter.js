import React, { Component } from 'react'
import countWords from '../helpers/countWords'
import Editor from './Editor'
import Counter from './Counter'
import ProgressBar from './ProgressBar'

export default class WordCounter extends Component {
  constructor () {
    super()
    this.state = { text: ''}
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange (currentText) {
    this.setState(() => ({ text: currentText }))
  }

  render () {
    const { targetWordCount } = this.props
    const { text } = this.state
    const wordCount = countWords(text)
    const progress = wordCount / targetWordCount

    return (
      <form className='measure pa4 san-serif'>
        <Editor onTextChange={this.handleTextChange}
          text={text}
        />
        <div className='flex mt3'>
          <Counter count={wordCount} />
          <ProgressBar completion={progress} />
        </div>
      </form>
    )
  };
}
