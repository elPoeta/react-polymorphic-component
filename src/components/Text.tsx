import React from 'react'

type Color = 'black' | 'white' | 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';

type AsProp<C extends React.ElementType> = {
  as?: C;
}

type TextProps = {
  color?: Color | 'black';
};

type PropsToOmit<C extends React.ElementType, Props> = keyof (AsProp<C> & Props);

type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>>
  & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

const Text = <C extends React.ElementType = 'span'>({ as, color, style, children, ...rest }: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || 'span';
  const customStyle: React.StyleHTMLAttributes<unknown> = { style } || { style: {} };
  const composeStyle: React.StyleHTMLAttributes<unknown> = color ? { style: { ...customStyle.style, color } } : customStyle;
  return <Component {...rest} {...composeStyle}>{children}</Component>;

}

export default Text;