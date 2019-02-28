import React, { useEffect, useState } from 'react'

function EffectHook ({ message = 'Message changes' }) {
  const [countUpdateWithMount, setCount] = useState(0)

  useEffect(() => {
    setCount(countUpdateWithMount + 1)
  }, [message])

  return (
    <div>
      <p>{`${message} ${countUpdateWithMount}`}</p>
    </div>
  )
}

export default EffectHook
