import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps...')
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate...')
    if (nextProps.names !== this.props.names) {
      return true
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate...');
    return { message: 'Hello' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate...')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentwillunmount')
  }

  render() {
    console.log('[Persons.js] rendering...')
    return this.props.names.map((name, index) => {
      return <Person
        click={() => this.props.deletePerson(index)}
        name={name.name}
        age={name.property}
        key={name.id}
        changedName={(event) => this.props.nameChange(event, name.id)} />
    }
    )
  }
}

export default Persons