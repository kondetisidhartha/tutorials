import React from 'react'

function charComponent(props) {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }
  return <p style={style} onClick={props.deleteChar}>{props.digit}</p>
}

export default charComponent;