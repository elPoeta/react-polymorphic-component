import React from 'react'

type Color = 'black' | 'white' | 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Color | 'black';
};

type Props<C extends React.ElementType> = React.PropsWithChildren<TextProps<C>> & Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>

const Text = <C extends React.ElementType = 'span'>({ as, color, style, children, ...rest }: Props<C>) => {
  const Component = as || 'span';
  const customStyle: React.StyleHTMLAttributes<unknown> = { style } || { style: {} };
  const composeStyle: React.StyleHTMLAttributes<unknown> = color ? { style: { ...customStyle.style, color } } : customStyle;
  return <Component {...rest} {...composeStyle}>{children}</Component>;

}

export default Text;