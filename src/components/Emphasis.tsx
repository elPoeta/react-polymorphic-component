import React from 'react'

const Emphasis = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ color: '#000', background: 'yellow', fontSize: '25px' }}>{children}</em>
  )
}

export default Emphasis;