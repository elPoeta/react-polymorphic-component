import React from 'react'
import { PolymorphicComponentProps, PolymorphicComponentRef } from '../types';

type Color = 'black' | 'white' | 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
  > = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicComponentRef<C> };

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
  color?: Color | 'black';
}>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text: TextComponent = React.forwardRef(<C extends React.ElementType = 'span'>(
  { as, color, style, children, ...rest }: TextProps<C>, ref?: PolymorphicComponentRef<C>) => {
  const Component = as || 'span';
  const customStyle: React.StyleHTMLAttributes<unknown> = { style } || { style: {} };
  const composeStyle: React.StyleHTMLAttributes<unknown> = color ? { style: { ...customStyle.style, color } } : customStyle;
  return <Component {...rest} {...composeStyle} ref={ref} >{children}</Component>;
}
);