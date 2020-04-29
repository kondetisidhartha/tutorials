import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>User typed: {props.stateName}</p>
    </div>
  );
}

export default userOutput;