import React, { } from 'react'

type TextProps = {
  as?: any,
  children: React.ReactNode
}
const Text = ({ as, children }: TextProps) => {
  const Component = as || 'span';
  return <Component>{children}</Component>;

}

export default Text;