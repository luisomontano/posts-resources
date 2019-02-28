import React, { useState } from 'react'

function StateHook ({ message = 'You clicked' }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{`${message} ${count}`}</p>
      <button data-testid='button' onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default StateHook
