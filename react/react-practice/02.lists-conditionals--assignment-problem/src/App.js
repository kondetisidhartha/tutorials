import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    userInput: '',
    inputLength: 0
  }

  findLengthHandler = event => {
    this.setState({
      userInput: event.target.value,
      inputLength: event.target.value.split('').length
    });
  }

  deleteCharHandler = (letterIndex) => {
    const letters = this.state.userInput.split('')
    letters.splice(letterIndex, 1)
    this.setState(
      { userInput: letters.join('') }
    );
  }


  render() {

    let letters = null;

    letters =
      <div>
        {this.state.userInput.split('').map((name, index) => {
          return (<CharComponent deleteChar={() => this.deleteCharHandler(index)}
            digit={name} key={index} />)
        })}
      </div>


    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr /><hr />
        <input type="text" onChange={this.findLengthHandler} />
        <p>Above input field is: {this.state.userInput}</p>
        <p>Length in above input field is: {this.state.inputLength}</p>
        <br />
        <ValidationComponent length={this.state.inputLength} />
        {letters}
      </div>
    );
  }
}

export default App;
