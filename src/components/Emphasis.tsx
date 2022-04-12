import React from 'react'

export const Emphasis = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ color: '#000', background: 'yellow', fontSize: '25px' }}>{children}</em>
  )
}
