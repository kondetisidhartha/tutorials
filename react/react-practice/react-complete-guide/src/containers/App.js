import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/cockpit/Cockpit'

// Prior to React 16.8 'state' can only be used in class based components
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    names: [
      { id: "num1", name: 'Sid', property: 30 },
      { id: "num2", name: 'Max', property: 28 },
      { id: "num3", name: 'Boo', property: 7 }
    ],
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] component did mount..')
  }

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.names];
    const personIndex = persons.findIndex(p => {
      return p.id === id
    })
    persons[personIndex].name = event.target.value;

    this.setState({
      names: persons
    });
  }

  showPersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState(
      { showPersons: !doesShow }
    );
  }

  deleteCockpit = () => {
    this.setState(
      { showCockpit: false }
    );
  }

  deletePersonHandler = (personIndex) => {
    // below points to original array and changes there also. bad practice
    // const persons = this.state.names;

    //make a copy and use
    // const persons = this.state.names.splice()
    const persons = [...this.state.names]
    persons.splice(personIndex, 1);
    this.setState({
      names: persons
    });
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons names={this.state.names}
        deletePerson={this.deletePersonHandler}
        nameChange={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={this.deleteCockpit}>Remove Cockpit</button>
        {this.state.showCockpit ? (<Cockpit
          names={this.state.names}
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          showPersonsAtrr={this.showPersonsHandler} />) : null}
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Inside React App!!'))
  }
}

export default App;
