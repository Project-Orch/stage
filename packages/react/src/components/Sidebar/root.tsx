import { ComponentProps } from 'react'
import { type RootProps, Root as CollapsibleRoot } from './collapsible'

export interface IRoot extends ComponentProps<typeof CollapsibleRoot> {}

export const Root = ({ children, ...rest }: IRoot) => {
  return (
    <CollapsibleRoot {...rest} defaultOpen>
      {children}
    </CollapsibleRoot>
  )
}
