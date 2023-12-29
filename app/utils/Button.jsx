import React from 'react'

const Button = ({click}) => {
    console.log(click);
  return (
    <button onClick={click}>Button</button>
  )
}

export default Button