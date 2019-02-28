import React, { useEffect, useState } from 'react'

function EffectHook ({ message = 'Updating With Mount times' }) {
  const [countUpdateWithMount, setCount] = useState(0)

  useEffect(() => {
    setCount(countUpdateWithMount + 1)
    return () => {
      setCount(0)
    }
  })

  return (
    <div>
      <p>{`${message} ${countUpdateWithMount}`}</p>
    </div>
  )
}

export default EffectHook
