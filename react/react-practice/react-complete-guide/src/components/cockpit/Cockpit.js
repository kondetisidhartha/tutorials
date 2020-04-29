import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpitjs] useEffect...');
    const timer = setTimeout(() => {
      alert('Timeout')
    }, 1000);
    return (() => {
      clearTimeout(timer)
      console.log('[Cockpit.js] ComponentWillUnmount')
    })
  }, []);

  // Use empty [] for ComponentDidMount or something like LifeCycleHooks on changing [] content

  let btnClasses = [classes.button];

  if (props.showPersons) {
    btnClasses.push(classes.red);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <button
        className={btnClasses.join(' ')}
        onClick={props.showPersonsAtrr}>Click Here</button>
    </div>
  );
}

export default React.memo(cockpit);