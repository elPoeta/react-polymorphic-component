import React from 'react'
import { TextComponent, TextProps, PolymorphicComponentRef } from '../types';

export const Text: TextComponent = React.forwardRef(<C extends React.ElementType = 'span'>(
  { as, color, style, children, ...rest }: TextProps<C>, ref?: PolymorphicComponentRef<C>) => {
  const Component = as || 'span';
  const customStyle: React.StyleHTMLAttributes<unknown> = { style } || { style: {} };
  const composeStyle: React.StyleHTMLAttributes<unknown> = color ? { style: { ...customStyle.style, color } } : customStyle;
  return <Component {...rest} {...composeStyle} ref={ref} >{children}</Component>;
}
);