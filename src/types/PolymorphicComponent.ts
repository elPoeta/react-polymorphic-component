import React from 'react';

type AsProp<C extends React.ElementType> = {
  as?: C;
}
type PropsToOmit<C extends React.ElementType, Props> = keyof (AsProp<C> & Props);

export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>>
  & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;