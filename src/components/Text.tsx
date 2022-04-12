import React from 'react'
import { PolymorphicComponentProps } from '../types';

type Color = 'black' | 'white' | 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';

type TextProps = {
  color?: Color | 'black';
};

export const Text = <C extends React.ElementType = 'span'>({ as, color, style, children, ...rest }: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || 'span';
  const customStyle: React.StyleHTMLAttributes<unknown> = { style } || { style: {} };
  const composeStyle: React.StyleHTMLAttributes<unknown> = color ? { style: { ...customStyle.style, color } } : customStyle;
  return <Component {...rest} {...composeStyle}>{children}</Component>;

}
