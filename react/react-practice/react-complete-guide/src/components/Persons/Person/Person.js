import React, { Component } from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import WithClass from '../../../hoc/WithClass'

// React Hook is used to create 'state' in functional components
class Person extends Component {
  render() {
    console.log('[Person .js] rendering...');
    return (
      <WithClass classes={classes.personComp}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
        <p >{this.props.children}</p>
        <input type="text" onChange={this.props.changedName} value={this.props.name} />
      </WithClass>
    );
  }
}

export default Person;

// <div className={classes.personComp}>