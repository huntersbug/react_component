import React from 'react'
import useready from './useTimeout'

const Ready = () => {
    const ready=useready(3000)

  return (
    <div>{ready?"Ready":"Not Ready"}</div>
  )
}

export default Ready