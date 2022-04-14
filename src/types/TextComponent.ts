import React from 'react';
import { PolymorphicComponentPropWithRef } from './';

type Color = 'black' | 'white' | 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';

export type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
  color?: Color | 'black';
}>;

export type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;